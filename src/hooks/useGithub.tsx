import { useEffect, useState } from 'react'
import { useDebounce } from './useDebounce'
import { User } from '../types/users'
import { usePreviousValue } from './usePreviousValue'
import { fetchUser } from '../api/github'

type InitialState = {
	isLoading: boolean
	error: string
	users: User[]
	hasMore: boolean
	totalCount: number
	nextPage: number
	perPage: number
}

const initialState: InitialState = {
	isLoading: false,
	error: '',
	users: [],
	totalCount: 0,
	nextPage: 1,
	perPage: 20,
	hasMore: true,
}

export const useGithub = (): {
	isLoading: boolean
	error: string
	users: User[]
	hasMore: boolean
	handleChangeUsername: (username: string) => void
	handleLoadMoreUsers: () => Promise<void>
} => {
	const [state, setState] = useState<InitialState>(initialState)
	const { users, nextPage, perPage } = state
	const [inputValue, setInputValue] = useState<string>('')

	const previousUsername = usePreviousValue<string>(inputValue)
	const debouncedUsername = useDebounce<string>(inputValue)

	useEffect(() => {
		if (previousUsername !== inputValue) {
			setState((currentState) => ({ ...currentState, totalCount: 0, nextPage: 1, users: [] }))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputValue])

	useEffect(() => {
		fetchUsers()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedUsername])

	useEffect(() => {
		setState((currentState) => ({ ...currentState, hasMore: currentState.users.length < currentState.totalCount }))
	}, [users?.length])

	const fetchUsers = async (): Promise<void | null> => {
		try {
			if (!debouncedUsername) {
				return
			}
			setState((currentState) => ({ ...currentState, isLoading: true, error: '' }))
			const { items, total_count } = await fetchUser(debouncedUsername, nextPage, perPage)
			setState((currentState) => ({
				...currentState,
				users: currentState.users.length === 0 ? items : [...currentState.users, ...items],
				isLoading: false,
				totalCount: total_count,
				nextPage: currentState.nextPage + 1,
			}))
		} catch (e: any) {
			setState((currentState) => ({ ...currentState, error: e.message }))
		} finally {
			setState((currentState) => ({ ...currentState, isLoading: false }))
		}
	}

	const handleLoadMoreUsers = async (): Promise<void> => {
		await fetchUsers()
	}

	// console.log(state)

	const handleChangeUsername = (value: string) => setInputValue(value)

	return { ...state, handleChangeUsername, handleLoadMoreUsers }
}

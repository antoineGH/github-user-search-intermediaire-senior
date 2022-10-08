import { useEffect, useMemo, useState } from 'react'
import { useDebounce } from './useDebouce'
import { User } from '../types/users'

type UserOutput = {
	isLoading: boolean
	hasError: boolean
	users: User[]
	handleChangeUsername: (username: string) => void
}

type Pagination = {
	totalCount: number
	currentPage: number
	perPage: number
}

type InitialState = Omit<UserOutput, 'handleChangeUsername'> & Pagination

const initialState: InitialState = {
	isLoading: false,
	hasError: false,
	users: [],
	totalCount: 0,
	currentPage: 1,
	perPage: 20,
}

export const useUser = (): UserOutput => {
	const [state, setState] = useState(initialState)
	const [inputValue, setInputValue] = useState('')
	const debouncedUsername = useDebounce(inputValue)

	const hasMore = useMemo(() => {
		console.log('currentPage:', state.currentPage)
		console.log('totalCount:', state.totalCount)
		console.log('users.length:', state.users.length)
		return state.users.length < state.totalCount
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.currentPage])

	useEffect(() => {
		fetchUsers()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedUsername])

	const fetchUsers = async (): Promise<void | null> => {
		if (!debouncedUsername) return null
		setState((currentState) => ({ ...currentState, isLoading: true, hasError: false }))
		try {
			const response = await fetch(
				`https://api.github.com/search/users?q=${debouncedUsername}&page=${state.currentPage}&per_page=${state.perPage}`
			)
			const { incomplete_results, items, total_count } = await response.json()
			if (!incomplete_results) {
				// TODO: incomplete_results
			}
			setState((currentState) => ({
				...currentState,
				users: currentState.users.length === 0 ? items : [...currentState.users, ...items],
				isLoading: false,
				totalCount: total_count,
				currentPage: currentState.currentPage + 1,
			}))
		} catch (e) {
			setState((currentState) => ({ ...currentState, hasError: true }))
		} finally {
			setState((currentState) => ({ ...currentState, isLoading: false }))
		}
	}

	const handleChangeUsername = (value: string) => setInputValue(value)

	// question : reset only pagination or user or both ?
	// const resetPaginationState = () =>
	// 	dispatch({ totalCount: initialState.totalCount, currentPage: initialState.currentPage })

	return { ...state, handleChangeUsername }
}

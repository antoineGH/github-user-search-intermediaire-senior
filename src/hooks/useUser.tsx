import { useEffect, useReducer } from 'react'
import { useDebounce } from './useDebouce'
import { Users } from '../types/users'

// Create a customHook to handle fetch and storing the API result
// Step 1 - type hook output
// Step 2 - type and declare initialValue
// Step 3 - handle state with useReducer
// Step 4 - create async fetch fetchUser function
// Step 5 - handle loading and error state within our reducer (dispatch)
// Step 6 - return state from the hook and the fetchUser function

type UserOutput = {
	isLoading: false
	hasError: false
	users: Users | {}
}

type InitialState = UserOutput

const initialState: InitialState = {
	isLoading: false,
	hasError: false,
	users: {},
}

/**
 * Hook to handle fetch and storing the API result
 * @return {Point} isLoading:boolean
 * @return {Point} hasError:boolean
 * @return {Point} users:Users
 * @return {Point} fetchUsers: (username: string) => Promise<null | void>
 */
export const useUser = (username: string): UserOutput => {
	const [state, dispatch] = useReducer((prevState: any, values: any) => ({ ...prevState, ...values }), initialState)
	const debouncedUsername = useDebounce(username)

	useEffect(() => {
		fetchUsers()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedUsername])

	/**
	 * Fetch a github user given a username.
	 * @return {Point} Return metadata and github user data.
	 */
	const fetchUsers = async (): Promise<void | null> => {
		if (!debouncedUsername) return null
		dispatch({ isLoading: true, hasError: false })
		try {
			const response = await fetch(`https://api.github.com/search/users?q=${debouncedUsername}`)
			const responseJson = await response.json()
			dispatch({ users: responseJson })
		} catch (e) {
			dispatch({ hasError: true })
		} finally {
			dispatch({ isLoading: false })
		}
	}

	return { ...state }
}

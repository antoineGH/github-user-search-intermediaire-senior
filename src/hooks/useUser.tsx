import { useReducer } from 'react'
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
	fetchUsers: (username: string) => Promise<null | void>
}

type InitialState = Omit<UserOutput, 'fetchUsers'>

const initialState: InitialState = {
	isLoading: false,
	hasError: false,
	users: {},
}

export const useUser = (): UserOutput => {
	const [users, dispatch] = useReducer((prevState: any, values: any) => ({ ...prevState, ...values }), initialState)

	const fetchUsers = async (username: string): Promise<void | null> => {
		if (!username) return null
		dispatch({ isLoading: true, hasError: false })
		try {
			const response = await fetch(`https://api.github.com/search/users?q=${username}`)
			const responseJson = await response.json()
			dispatch({ users: responseJson })
		} catch (e) {
			dispatch({ hasError: true })
		} finally {
			dispatch({ isLoading: false })
		}
	}

	return { ...users, fetchUsers }
}

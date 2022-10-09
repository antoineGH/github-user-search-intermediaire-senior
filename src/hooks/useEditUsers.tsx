type InitialState = {}

const initialState: InitialState = {}

type useEditUsersOutput = {
	handleCopyUser: () => void
	handleDeleteUser: () => void
}

export const useEditUsers = (): useEditUsersOutput => {
	const handleCopyUser = () => {}
	const handleDeleteUser = () => {}

	return { handleCopyUser, handleDeleteUser }
}

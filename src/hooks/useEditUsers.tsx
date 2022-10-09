type useEditUsersOutput = {
	handleCopyUser: (toCopy: number[]) => void
	handleDeleteUser: (toDelete: number[]) => void
}

export const useEditUsers = (): useEditUsersOutput => {
	const handleCopyUser = (toCopy: number[]) => {
		console.log(toCopy)
	}
	const handleDeleteUser = (toDelete: number[]) => {
		console.log(toDelete)
	}

	return { handleCopyUser, handleDeleteUser }
}

import { useState } from 'react'
import { ActionType, User } from '../types/users'

type UserEditModeOutput = {
	editOn: boolean
	selectedID: number[]
	setSelectedID: (num: number[]) => void
	selectUserID: (userID: number, action: ActionType) => void
	handleToggleEdit: () => void
	handleSelectAll: () => void
	handleUnSelectAll: () => void
}

export const useEditMode = (users: User[]): UserEditModeOutput => {
	const [editOn, setEditOn] = useState<boolean>(true)
	const [selectedID, setSelectedID] = useState<number[]>([])

	const addUserID = (userID: number): void => {
		if (!selectedID.includes(userID)) setSelectedID((prevState) => [...prevState, userID])
	}

	const selectUserID = (userID: number, action: ActionType): void => {
		if (!userID) return
		if (action === 'add') addUserID(userID)
		if (action === 'remove') removeUserID(userID)
	}

	const removeUserID = (userID: number): void => {
		const filteredSelectedID = selectedID.filter((id) => id !== userID)
		setSelectedID(filteredSelectedID)
	}

	const handleToggleEdit = (): void => setEditOn((prevState) => !prevState)

	const handleSelectAll = (): void =>
		users.forEach((user) => setSelectedID((currentState) => [...currentState, user.id]))

	const handleUnSelectAll = (): void => setSelectedID([])

	return {
		selectedID,
		editOn,
		setSelectedID,
		selectUserID,
		handleToggleEdit,
		handleSelectAll,
		handleUnSelectAll,
	}
}

import { useGithub } from './hooks/useGithub'
import { TopBar } from './components/topBar/TopBar'
import { UserTable } from './components/userTable/UserTable'
import './App.css'
import { useState } from 'react'
import { ActionType } from './types/users'

function App() {
	const {
		users,
		hasMore,
		isLoading,
		error,
		hasError,
		hasResult,
		handleChangeUsername,
		handleLoadMoreUsers,
		deleteUsers,
		copyUsers,
	} = useGithub()

	const [selectedID, setSelectedID] = useState<number[]>([])
	const [editOn, setEditOn] = useState<boolean>(false)
	console.log(selectedID)

	const addUserID = (userID: number): void => {
		if (!selectedID.includes(userID)) setSelectedID((prevState) => [...prevState, userID])
	}

	const removeUserID = (userID: number): void => {
		const filteredSelectedID = selectedID.filter((id) => id !== userID)
		setSelectedID(filteredSelectedID)
	}

	const selectUserID = (userID: number, action: ActionType): void => {
		if (!userID) return
		if (action === 'add') {
			addUserID(userID)
		} else {
			removeUserID(userID)
		}
	}

	const handleCopyUsers = (): void => {
		console.log('handleCopyUsers')
		if (selectedID.length > 0) {
			copyUsers(selectedID)
			setSelectedID([])
		}
	}

	const handleDeleteUsers = (): void => {
		if (selectedID.length > 0) {
			deleteUsers(selectedID)
			setSelectedID([])
		}
	}

	const handleToggleEdit = (): void => {
		setEditOn((prevState) => !prevState)
	}

	const handleSelectAll = (): void => {
		console.log('handleSelectAll')
		users.forEach((user) => {
			setSelectedID((currentState) => [...currentState, user.id])
		})
	}

	const handleUnSelectAll = (): void => {
		setSelectedID([])
	}

	return (
		<div className='App'>
			<TopBar
				handleChangeUsername={handleChangeUsername}
				handleDeleteUsers={handleDeleteUsers}
				handleCopyUsers={handleCopyUsers}
				handleToggleEdit={handleToggleEdit}
				editOn={editOn}
				selectedID={selectedID}
				handleSelectAll={handleSelectAll}
				handleUnSelectAll={handleUnSelectAll}
			/>
			<UserTable
				users={users}
				isLoading={isLoading}
				error={error}
				hasMore={hasMore}
				hasError={hasError}
				hasResult={hasResult}
				editOn={editOn}
				handleLoadMoreUsers={handleLoadMoreUsers}
				selectUserID={selectUserID}
				selectedID={selectedID}
			/>
			{hasMore && <button onClick={handleLoadMoreUsers}>Load More</button>}
		</div>
	)
}

export default App

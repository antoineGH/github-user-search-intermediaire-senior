import { useGithub } from './hooks/useGithub'
import { useEditMode } from './hooks/useEditMode'
import { TopBar } from './components/topBar/TopBar'
import { UserTable } from './components/userTable/UserTable'
import './App.css'

export const App = () => {
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
	const { selectedID, editOn, setSelectedID, selectUserID, handleToggleEdit, handleSelectAll, handleUnSelectAll } =
		useEditMode(users)

	const handleCopyUsers = (): void => {
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
		</div>
	)
}

export default App

import { useGithub } from './hooks/useGithub'
import { TopBar } from './components/topBar/TopBar'
import { UserTable } from './components/userTable/UserTable'
import './App.css'

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

	const handleCopyUsers = () => {
		console.log('handleCopyUsers')
		// copyUsers([11167, 295709])
	}
	const handleDeleteUsers = () => {
		console.log('handleDeleteUsers')
		// deleteUsers([11167, 295709])
	}

	return (
		<div className='App'>
			<TopBar
				handleChangeUsername={handleChangeUsername}
				handleDeleteUsers={handleDeleteUsers}
				handleCopyUsers={handleCopyUsers}
			/>
			<UserTable
				users={users}
				isLoading={isLoading}
				error={error}
				hasMore={hasMore}
				hasError={hasError}
				hasResult={hasResult}
				handleLoadMoreUsers={handleLoadMoreUsers}
			/>
			{hasMore && <button onClick={handleLoadMoreUsers}>Load More</button>}
		</div>
	)
}

export default App

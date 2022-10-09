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

	return (
		<div className='App'>
			{/* TEST DELETE */}
			<button onClick={() => deleteUsers([11167, 295709])}>Delete</button>
			<button onClick={() => copyUsers([11167, 295709])}>Copy</button>
			<TopBar handleChangeUsername={handleChangeUsername} />
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

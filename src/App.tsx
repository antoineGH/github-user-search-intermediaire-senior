import React from 'react'
import { useGithub } from './hooks/useGithub'
import { TopBar } from './components/topBar/TopBar'
import { UserTable } from './components/userTable/UserTable'
import './App.css'

function App() {
	const { users, hasMore, isLoading, error, handleChangeUsername, handleLoadMoreUsers } = useGithub()

	return (
		<div className='App'>
			<TopBar handleChangeUsername={handleChangeUsername} />
			<UserTable users={users} isLoading={isLoading} error={error} />
			{hasMore && <button onClick={handleLoadMoreUsers}>Load More</button>}
		</div>
	)
}

export default App

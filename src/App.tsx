import React from 'react'
import { useGithub } from './hooks/useGithub'
import { TopBar } from './components/topBar/TopBar'
import { UserTable } from './components/userTable/UserTable'
import './App.css'

function App() {
	const { users, handleChangeUsername, hasMore, handleLoadMoreUsers } = useGithub()

	return (
		<div className='App'>
			<TopBar handleChangeUsername={handleChangeUsername} />
			<UserTable />
			{hasMore && <button onClick={handleLoadMoreUsers}>Load More</button>}
		</div>
	)
}

export default App

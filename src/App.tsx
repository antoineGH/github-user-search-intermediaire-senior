import React from 'react'
import { useUser } from './hooks/useUser'
import { TopBar } from './components/topBar/TopBar'
import { UserTable } from './components/userTable/UserTable'
import './App.css'

function App() {
	const { users, handleChangeUsername } = useUser()
	console.log(users)

	return (
		<div className='App'>
			<TopBar handleChangeUsername={handleChangeUsername} />
			<UserTable />
		</div>
	)
}

export default App

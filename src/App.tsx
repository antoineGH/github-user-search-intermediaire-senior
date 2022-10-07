import React, { useEffect } from 'react'
import { TopBar } from './components/topBar/TopBar'
import { UserTable } from './components/userTable/UserTable'
import './App.css'
import { useUser } from './hooks/useUser'

function App() {
	const { users, isLoading, hasError, fetchUsers } = useUser()

	useEffect(() => {
		fetchUsers('antoineGH')
	}, [])

	return (
		<div className='App'>
			<TopBar />
			<UserTable users={users} />
		</div>
	)
}

export default App

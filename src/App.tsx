import React, { useState } from 'react'
import { useUser } from './hooks/useUser'
import { TopBar } from './components/topBar/TopBar'
import { UserTable } from './components/userTable/UserTable'
import './App.css'

function App() {
	const [input, setInput] = useState('')
	const { users } = useUser(input)
	console.log(users)

	const handleChangeUsername = (value: string) => {
		setInput(value)
	}

	return (
		<div className='App'>
			<TopBar handleChangeUsername={handleChangeUsername} />
			<UserTable />
		</div>
	)
}

export default App

import React from 'react'
import './App.css'
import { TopBar } from './components/topBar/TopBar'
import { UserTable } from './components/userTable/UserTable'

function App() {
	return (
		<div className='App'>
			<TopBar />
			<UserTable />
		</div>
	)
}

export default App

import React from 'react'
import { TopBar } from './components/topBar/TopBar'
import { UserTable } from './components/userTable/UserTable'
import './App.css'

function App() {
	return (
		<div className='App'>
			<TopBar />
			<UserTable />
		</div>
	)
}

export default App

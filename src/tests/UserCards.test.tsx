import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { App } from '../App'
import userEvent from '@testing-library/user-event'

describe('Render front components', () => {
	test('Renders App', () => {
		render(<App />)
	})
	test('Toggle Edit Button On', () => {
		render(<App />)
		const editButton = screen.getByRole('button', { name: 'Edit edit' })
		userEvent.click(editButton)
		expect(editButton).toHaveTextContent('Stop Edit')
	})
	test('Toggle Edit Button Off', () => {
		render(<App />)
		const editButton = screen.getByRole('button', { name: 'Edit edit' })
		userEvent.click(editButton)
		expect(editButton).toHaveTextContent('Edit')
	})
})

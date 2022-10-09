import { useState, useEffect } from 'react'

export const useDebounce = <T = string,>(value: T, delay: number = 1000): T => {
	const [debounceValue, setDebounceValue] = useState(value)

	useEffect(() => {
		const debounce = setTimeout(() => {
			setDebounceValue(value)
		}, delay)

		return () => clearTimeout(debounce)
	}, [value, delay])

	return debounceValue
}

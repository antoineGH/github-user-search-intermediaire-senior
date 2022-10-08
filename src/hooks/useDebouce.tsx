import { useState, useEffect } from 'react'

export const useDebounce = (value: string, delay: number = 2000): string => {
	const [debounceValue, setDebounceValue] = useState(value)

	useEffect(() => {
		const debounce = setTimeout(() => {
			setDebounceValue(value)
		}, delay)

		return () => clearTimeout(debounce)
	}, [value, delay])

	return debounceValue
}

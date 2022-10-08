import { useState, useEffect } from 'react'

export const useDebounce = (value: string, delay: number = 2000): string => {
	const [debounceValue, setDebounceValue] = useState(value)

	useEffect(() => {
		setTimeout(() => {
			setDebounceValue(value)
		}, delay)
	}, [value, delay])

	return debounceValue
}

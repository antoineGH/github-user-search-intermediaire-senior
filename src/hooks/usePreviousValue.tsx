import { useEffect, useRef } from 'react'

export const usePreviousValue = <T = string,>(value: T) => {
	const ref: any = useRef()

	useEffect(() => {
		ref.current = value
	}, [value])

	return ref.current
}

import { useCallback, useRef } from 'react'
import { User } from '../../types/users'
import { UserCard } from '../userCard/UserCard'
import './style.css'

type Props = {
	users: User[]
	isLoading: boolean
	error: string
	hasMore: boolean
	hasError: boolean
	hasResult: boolean
	handleLoadMoreUsers: () => void
}

export const UserTable = ({
	users,
	isLoading,
	error,
	hasMore,
	hasError,
	hasResult,
	handleLoadMoreUsers,
}: Props): JSX.Element => {
	const observer = useRef<IntersectionObserver | null>(null)

	const lastUserElement = useCallback(
		(node: any) => {
			if (isLoading) return
			if (observer.current) observer.current.disconnect()
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					console.log('INTERSECTING')
					console.log('hasmore =>' + hasMore)
					handleLoadMoreUsers()
				}
			})

			if (node) observer.current.observe(node)
		},
		[isLoading]
	)

	const genRanHex = (size: number) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')

	return (
		<div className='user-table' style={hasResult ? { overflowY: 'scroll' } : { overflowY: 'auto' }}>
			{hasError ? (
				<div className='no-result'>
					<p>{error}</p>
				</div>
			) : isLoading ? (
				<div className='no-result'>
					<span className='material-icons icon-loading'>loop</span>
				</div>
			) : (
				<>
					<div className='user-cards'>
						{users.map((user) => (
							<UserCard lastUserElement={lastUserElement} key={user.id + genRanHex(6)} user={user} />
						))}
					</div>
				</>
			)}
		</div>
	)
}

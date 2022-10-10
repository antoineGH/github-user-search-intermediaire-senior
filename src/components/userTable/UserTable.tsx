import { useCallback, useRef } from 'react'
import { ActionType, User } from '../../types/users'
import { UserCard } from '../userCard/UserCard'
import './style.css'

type Props = {
	users: User[]
	isLoading: boolean
	error: string
	hasMore: boolean
	hasError: boolean
	hasResult: boolean
	editOn: boolean
	handleLoadMoreUsers: () => void
	selectUserID: (userID: number, action: ActionType) => void
	selectedID: number[]
}

export const UserTable = ({
	users,
	isLoading,
	error,
	hasMore,
	hasError,
	hasResult,
	editOn,
	handleLoadMoreUsers,
	selectUserID,
	selectedID,
}: Props): JSX.Element => {
	const observer = useRef<IntersectionObserver | null>(null)

	const lastUserElement = useCallback(
		(node: any) => {
			if (isLoading) return
			if (!hasMore) return
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[hasMore]
	)

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
						{users.map((user, count) => (
							<UserCard
								lastUserElement={lastUserElement}
								key={count}
								user={user}
								editOn={editOn}
								selectUserID={selectUserID}
								selectedID={selectedID}
							/>
						))}
					</div>
				</>
			)}
		</div>
	)
}

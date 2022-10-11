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
	selectedID: number[]
	handleLoadMoreUsers: () => void
	selectUserID: (userID: number, action: ActionType) => void
}

export const UserTable = ({
	users,
	isLoading,
	error,
	hasMore,
	hasError,
	hasResult,
	editOn,
	selectedID,
	handleLoadMoreUsers,
	selectUserID,
}: Props): JSX.Element => {
	const observer = useRef<IntersectionObserver | null>(null)

	const lastUserElement = useCallback(
		(node: any) => {
			if (!editOn || !hasMore || isLoading) return
			if (observer.current) observer.current.disconnect()
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					handleLoadMoreUsers()
				}
			})

			if (node) observer.current.observe(node)
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[hasMore, editOn]
	)

	return (
		<div className='user-table' style={hasResult ? { overflowY: 'scroll' } : { overflowY: 'auto' }}>
			{hasError ? (
				<div className='no-result'>
					<p>{error}</p>
				</div>
			) : isLoading && users.length === 0 ? (
				<div className='no-result'>
					<span className='material-icons icon-loading'>loop</span>
				</div>
			) : (
				<div className='user-cards'>
					{users.map((user) => (
						<UserCard
							lastUserElement={lastUserElement}
							key={user.id}
							user={user}
							editOn={editOn}
							selectUserID={selectUserID}
							selectedID={selectedID}
						/>
					))}
				</div>
			)}
		</div>
	)
}

import { User } from '../../types/users'
import { UserCard } from '../userCard/UserCard'
import './style.css'

type Props = {
	users: User[]
	isLoading: boolean
	error: string
}

export const UserTable = ({ users, isLoading, error }: Props): JSX.Element => {
	const hasResult = (): boolean => users.length !== 0
	const hasError = (): boolean => error.length > 1

	return (
		<div className='user-table' style={hasResult() ? { overflowY: 'scroll' } : { overflowY: 'auto' }}>
			{hasError() ? (
				<div className='no-result'>
					<p>{error}</p>
				</div>
			) : isLoading ? (
				<div className='no-result'>
					<p>Loading</p>
				</div>
			) : (
				<div className='user-cards'>
					{users.map((user) => (
						<UserCard key={user.id} user={user} />
					))}
				</div>
			)}
		</div>
	)
}

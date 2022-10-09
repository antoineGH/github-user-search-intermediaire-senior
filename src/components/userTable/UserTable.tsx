import { User } from '../../types/users'
import { UserCard } from '../userCard/UserCard'
import './style.css'

type Props = {
	users: User[]
}

export const UserTable = ({ users }: Props): JSX.Element => {
	const hasResult = (): boolean => users.length !== 0

	return (
		<div className='user-table' style={hasResult() ? { overflowY: 'scroll' } : { overflowY: 'auto' }}>
			{hasResult() ? (
				<div className='user-cards'>
					{users.map((user) => (
						<UserCard key={user.id} user={user} />
					))}
				</div>
			) : (
				<div className='no-result'>
					<p>No results</p>
				</div>
			)}
		</div>
	)
}

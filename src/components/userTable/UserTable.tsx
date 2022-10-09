import { User } from '../../types/users'
import { UserCard } from '../userCard/UserCard'
import './style.css'

type Props = {
	users: User[]
}

export const UserTable = ({ users }: Props): JSX.Element => {
	return (
		<div className='user-table'>
			<div className='user-cards'>
				{users.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</div>
		</div>
	)
}

import { Users } from '../../types/users'
import { UserCard } from '../userCard/UserCard'
import './style.css'

type UserTableProps = {
	users: Users | {}
}

export const UserTable = ({ users }: UserTableProps): JSX.Element => {
	return (
		<div className='user-table'>
			<UserCard />
		</div>
	)
}

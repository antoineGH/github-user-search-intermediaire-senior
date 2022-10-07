import { Users } from '../../types/users'
import { UserCard } from '../userCard/UserCard'

type UserTableProps = {
	users: Users | {}
}

export const UserTable = ({ users }: UserTableProps): JSX.Element => {
	console.log(users)
	return (
		<>
			<p>UserTable</p>
			<UserCard />
		</>
	)
}

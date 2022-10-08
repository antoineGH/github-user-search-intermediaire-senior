import { UserCard } from '../userCard/UserCard'
import './style.css'

export const UserTable = (): JSX.Element => {
	return (
		<div className='user-table'>
			<UserCard />
		</div>
	)
}

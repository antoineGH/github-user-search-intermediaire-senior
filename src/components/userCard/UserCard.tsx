import { User } from '../../types/users'
import './style.css'

type Props = {
	user: User
}
export const UserCard = ({ user }: Props): JSX.Element => {
	return (
		<>
			<div className='user-card'>
				<div className='user-card-header'>
					<input type='checkbox' id='scales' name='scales' />
				</div>
				<div className='user-card-avatar'>
					<img src={user.avatar_url} alt={user.login + "'s avatar"} />
				</div>
				<div className='user-card-id'>{user.id}</div>
				<div className='user-card-login'>{user.login}</div>
				<div className='user-card-button'>
					<a href={user.html_url}>
						<button className='button-primary'>View profile</button>
					</a>
				</div>
			</div>
		</>
	)
}

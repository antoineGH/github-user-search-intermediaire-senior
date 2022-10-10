import { ActionType, User } from '../../types/users'
import './style.css'

type Props = {
	user: User
	lastUserElement: any
	editOn: boolean
	selectUserID: (userID: number, action: ActionType) => void
	selectedID: number[]
}

export const UserCard = ({ user, lastUserElement, editOn, selectUserID, selectedID }: Props): JSX.Element => {
	const isChecked = () => selectedID.includes(user.id)

	const handleCard = (e: any): void => {
		e.persist()
		if (isChecked()) {
			selectUserID(user.id, ActionType.remove)
		} else {
			selectUserID(user.id, ActionType.add)
		}
	}

	return (
		<div className='user-card' ref={lastUserElement}>
			{!editOn && (
				<div className='user-card-header'>
					<input
						type='checkbox'
						id='scales'
						name='scales'
						onChange={(e) => handleCard(e)}
						checked={isChecked()}
					/>
				</div>
			)}
			<div className='user-card-avatar'>
				<img src={user.avatar_url} alt={user.login + "'s avatar"} />
			</div>
			<div className='user-card-id'>{user.id}</div>
			<div className='user-card-login'>{user.login}</div>
			<div className='user-card-button'>
				<a href={user.html_url} target='_blank' rel='noreferrer'>
					<button className='button-primary'>View profile</button>
				</a>
			</div>
		</div>
	)
}

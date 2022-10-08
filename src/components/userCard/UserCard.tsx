import './style.css'

const hardCodedJSON = {
	login: 'antoineGH',
	id: 35226140,
	avatar_url: 'https://avatars.githubusercontent.com/u/35226140?v=4',
	html_url: 'https://github.com/antoineGH',
}

export const UserCard = (): JSX.Element => {
	return (
		<>
			<div className='user-cards'>
				<div className='user-card'>
					<div className='user-card-header'>
						<input type='checkbox' id='scales' name='scales' />
					</div>
					<div className='user-card-avatar'>
						<img src={hardCodedJSON.avatar_url} alt={hardCodedJSON.login + "'s avatar"} />
					</div>
					<div className='user-card-id'>{hardCodedJSON.id}</div>
					<div className='user-card-login'>{hardCodedJSON.login}</div>
					<div className='user-card-button'>
						<a href={hardCodedJSON.html_url}>
							<button>View profile</button>
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

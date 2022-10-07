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
					<div className='user-card-header'>cardHeader</div>
					<div className='user-card-avatar'>cardHeader</div>
					<div className='user-card-id'>cardHeader</div>
					<div className='user-card-login'>cardHeader</div>
					<div className='user-card-button'>cardHeader</div>
				</div>
				<div className='user-card'></div>
				<div className='user-card'></div>
				<div className='user-card'></div>
				<div className='user-card'></div>
			</div>
			<div className='user-cards'>
				<div className='user-card'></div>
				<div className='user-card'></div>
				<div className='user-card'></div>
				<div className='user-card'></div>
				<div className='user-card'></div>
			</div>
		</>
	)
}

import './style.css'

type Props = {
	handleDeleteUsers: () => void
	handleCopyUsers: () => void
	handleToggleEdit: () => void
	editOn: boolean
}

export const FilterBar = ({ handleDeleteUsers, handleCopyUsers, handleToggleEdit, editOn }: Props): JSX.Element => {
	return (
		<div className='Filter'>
			<div className='edit'>
				<button className='button-secondary' onClick={handleToggleEdit}>
					{editOn ? 'Edit' : 'Stop Edit'}
					<span className='material-icons icon-grey icon-edit'>{editOn ? 'edit' : 'close'}</span>
				</button>
			</div>
			{!editOn && (
				<div className='action'>
					<div className='action-left'>
						<input type='checkbox' id='scales' name='scales' />
						<p>3 elements selected</p>
					</div>

					<div className='action-right'>
						<button className='button-secondary' onClick={handleCopyUsers}>
							Copy<span className='material-icons icon-grey'>content_copy</span>
						</button>
						<button className='button-secondary' onClick={handleDeleteUsers}>
							Delete<span className='material-icons icon-grey'>delete</span>
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

import { useEffect, useState } from 'react'
import './style.css'

type Props = {
	editOn: boolean
	selectedID: number[]
	handleDeleteUsers: () => void
	handleCopyUsers: () => void
	handleToggleEdit: () => void
	handleSelectAll: () => void
	handleUnSelectAll: () => void
}

export const FilterBar = ({
	editOn,
	selectedID,
	handleDeleteUsers,
	handleCopyUsers,
	handleToggleEdit,
	handleSelectAll,
	handleUnSelectAll,
}: Props): JSX.Element => {
	const [isChecked, setIsChecked] = useState(false)
	const countSelectedElements = selectedID.length

	const handleChecked = () => {
		isChecked ? handleUnSelectAll() : handleSelectAll()
		setIsChecked((prevState) => !prevState)
	}

	useEffect(() => {
		if (selectedID.length >= 1) setIsChecked(true)
		if (selectedID.length === 0) setIsChecked(false)
	}, [selectedID])

	return (
		<div className='Filter'>
			<div className='edit'>
				<button className='button-secondary' name='button-secondary' onClick={handleToggleEdit}>
					{editOn ? 'Edit' : 'Stop Edit'}
					<span className='material-icons icon-grey icon-edit'>{editOn ? 'edit' : 'close'}</span>
				</button>
			</div>
			{!editOn && (
				<div className='action'>
					<div className='action-left'>
						<input type='checkbox' id='scales' name='scales' onChange={handleChecked} checked={isChecked} />
						<p className='selected'>{countSelectedElements} elements selected</p>
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

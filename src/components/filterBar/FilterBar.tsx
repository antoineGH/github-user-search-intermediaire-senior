import { useEffect, useState } from 'react'
import './style.css'

type Props = {
	handleDeleteUsers: () => void
	handleCopyUsers: () => void
	handleToggleEdit: () => void
	editOn: boolean
	selectedID: number[]
	handleSelectAll: () => void
	handleUnSelectAll: () => void
}

export const FilterBar = ({
	handleDeleteUsers,
	handleCopyUsers,
	handleToggleEdit,
	editOn,
	selectedID,
	handleSelectAll,
	handleUnSelectAll,
}: Props): JSX.Element => {
	const countSelectedElements = (): number => {
		if (selectedID.length) return selectedID.length
		return 0
	}

	const [isChecked, setIsChecked] = useState(false)

	const handleChecked = () => {
		if (isChecked) {
			handleUnSelectAll()
		} else {
			handleSelectAll()
		}
		setIsChecked((prevState) => !prevState)
	}

	useEffect(() => {
		if (selectedID.length >= 1) setIsChecked(true)
		if (selectedID.length === 0) setIsChecked(false)
	}, [selectedID])

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
						<input type='checkbox' id='scales' name='scales' onChange={handleChecked} checked={isChecked} />
						<p className='selected'>{countSelectedElements()} elements selected</p>
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

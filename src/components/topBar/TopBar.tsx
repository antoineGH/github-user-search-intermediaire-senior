import { FilterBar } from '../filterBar/FilterBar'
import { SearchBar } from '../searchBar/SearchBar'
import './style.css'

type Props = {
	handleChangeUsername: (value: string) => void
	handleDeleteUsers: () => void
	handleCopyUsers: () => void
	handleToggleEdit: () => void
	editOn: boolean
}

export const TopBar = ({
	handleChangeUsername,
	handleDeleteUsers,
	handleCopyUsers,
	handleToggleEdit,
	editOn,
}: Props): JSX.Element => {
	return (
		<div className='Topbar'>
			<div className='Title'>
				<p>Github Search</p>
			</div>
			<SearchBar handleChangeUsername={handleChangeUsername} />
			<FilterBar
				handleDeleteUsers={handleDeleteUsers}
				handleCopyUsers={handleCopyUsers}
				handleToggleEdit={handleToggleEdit}
				editOn={editOn}
			/>
		</div>
	)
}

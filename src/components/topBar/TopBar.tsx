import { FilterBar } from '../filterBar/FilterBar'
import { SearchBar } from '../searchBar/SearchBar'
import './style.css'

type Props = {
	handleChangeUsername: (value: string) => void
}

export const TopBar = ({ handleChangeUsername }: Props): JSX.Element => {
	return (
		<div className='Topbar'>
			<div className='Title'>
				<p>Github Search</p>
			</div>
			<SearchBar handleChangeUsername={handleChangeUsername} />
			<FilterBar />
		</div>
	)
}

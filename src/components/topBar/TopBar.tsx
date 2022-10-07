import { FilterBar } from '../filterBar/FilterBar'
import { SearchBar } from '../searchBar/SearchBar'
import './style.css'

export const TopBar = (): JSX.Element => {
	return (
		<div className='Topbar'>
			<div className='Title'>
				<p>Github Search</p>
			</div>
			<SearchBar />
			<FilterBar />
		</div>
	)
}

import { FilterBar } from '../filterBar/FilterBar'
import { SearchBar } from '../searchBar/SearchBar'

export const TopBar = (): JSX.Element => {
	return (
		<>
			<p>TopBar</p>
			<SearchBar />
			<FilterBar />
		</>
	)
}

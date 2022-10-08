import './style.css'

export const SearchBar = (): JSX.Element => {
	return (
		<div className='Search'>
			<input type='text' id='username' name='username' placeholder='Search input' />
		</div>
	)
}

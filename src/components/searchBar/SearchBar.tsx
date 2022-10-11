import './style.css'

type Props = {
	handleChangeUsername: (value: string) => void
}

export const SearchBar = ({ handleChangeUsername }: Props): JSX.Element => (
	<div className='Search'>
		<input
			type='text'
			id='username'
			name='username'
			placeholder='Search input'
			onChange={(e) => handleChangeUsername(e.target.value)}
		/>
	</div>
)

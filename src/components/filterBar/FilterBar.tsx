import './style.css'

export const FilterBar = (): JSX.Element => {
	return (
		<div className='Filter'>
			<div className='edit'>
				<button>Edit On</button>
			</div>
			<div className='action'>
				<div className='action-left'>
					<input type='checkbox' id='scales' name='scales' />
					<p>3 elements selected</p>
				</div>
				<div className='action-right'>
					<button>Copy</button>
					<span className='material-icons icon-grey'>content_copy</span>
					<span className='material-icons icon-grey'>delete</span>
					<button>Delete</button>
				</div>
			</div>
		</div>
	)
}

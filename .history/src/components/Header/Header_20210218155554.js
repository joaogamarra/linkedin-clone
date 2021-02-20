import './Header.css'
import SearchIcon from '@material-ui/icons/Search'

const Header = () => {
	return (
		<div className='header'>
			<div>this is the header</div>

			<div className='header_left'>
				<img src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg' alt='' />

				<div className='header__search'>
					<SearchIcon />
					<input type='text' />
				</div>
			</div>
			<div className='header_right'></div>
		</div>
	)
}

export default Header

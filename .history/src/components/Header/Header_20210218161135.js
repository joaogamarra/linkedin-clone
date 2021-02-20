import './Header.css'
import HeaderOption from './HeaderOption'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'

const Header = () => {
	return (
		<div className='header'>
			<div>this is the header</div>

			<div className='header__left'>
				<img src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg' alt='' />

				<div className='header__search'>
					<SearchIcon />
					<input type='text' />
				</div>
			</div>
			<div className='header_right'>
				<HeaderOption icon={HomeIcon} title='Home' />
				<HeaderOption icon={SupervisorAccountIcon} title='My Network' />
			</div>
		</div>
	)
}

export default Header

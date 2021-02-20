import './HeaderOption.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../../reducers/userSlice'

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
	const user = useSelector(selectUser)
	console.log('file: HeaderOption.js ~ line 8 ~ user', user)

	return (
		<div onClick={onClick} className='headerOption'>
			{Icon && <Icon className='headerOption__icon' />}
			{avatar && <Avatar className='headerOption__icon'></Avatar>}
			<h3 className='headerOption__title'>{title}</h3>
		</div>
	)
}

export default HeaderOption

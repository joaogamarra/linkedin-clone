import './Sidebar.css'
import { Avatar } from '@material-ui/core'

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<img src='' alt='' />
				<Avatar />
				<h2>Sonny Sangha</h2>
				<h4>sonny@mail.com</h4>
			</div>

			<div className='sidebar__stats'>
				<div className='sidebar__stat'>
					<p>Who view you</p>
					<p className='sidebar__statNumber'>2,534</p>
				</div>
				<div className='sidebar__stat'>
					<p>Views on post</p>
					<p className='sidebar__statNumber'>2,448</p>
				</div>
			</div>

			<div className='sidebar__bottom'>
				<p>Recent</p>
			</div>
		</div>
	)
}

export default Sidebar

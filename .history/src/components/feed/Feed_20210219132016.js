import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import InputOption from './InputOption'

const Feed = () => {
	return (
		<div className='feed'>
			<div className='feed__inputContainer'>
				<div className='feed__input'>
					<CreateIcon />
					<form>
						<input type='text' />
						<button type='submit'>Send</button>
					</form>
				</div>
			</div>
			<div className='feed__inputOptions'>
				<InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
				<InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
				<InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
				<InputOption Icon={CalendarViewDayIcon} title='Write Article' color='#70b5f7FC15E9' />
			</div>
		</div>
	)
}

export default Feed

import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import InputOption from './InputOption'

const Feed = () => {
	return (
		<div className='feed'>
			<div className='feed_inputContainer'>
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
			</div>
		</div>
	)
}

export default Feed

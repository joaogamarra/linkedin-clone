import { useState, useEffect } from 'react'
import { db } from '../../firebase/firebase'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import InputOption from './InputOption'
import Post from './Post'

const Feed = () => {
	const [input, setInput] = useState('')
	const [posts, setPosts] = useState([])

	useEffect(() => {
		db.collection('posts').onSnapshot((snapshot) =>
			setPosts(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			)
		)
	}, [])

	const sendPost = (e) => {
		e.preventDefault()

		db.collection('posts').add({
			name: 'Sonny Sangha',
			description: 'this is a test',
		})
	}

	return (
		<div className='feed'>
			<div className='feed__inputContainer'>
				<div className='feed__input'>
					<CreateIcon />
					<form>
						<input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
						<button onClick='sendPost' type='submit'>
							Send
						</button>
					</form>
				</div>
				<div className='feed__inputOptions'>
					<InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
					<InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
					<InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
					<InputOption Icon={CalendarViewDayIcon} title='Write Article' color='#70b5f7FC15E9' />
				</div>
			</div>
			{posts.map((post) => {
				;<Post name='Sonny Sangha' description='this is a test' message='Wow this worked' />
			})}
		</div>
	)
}

export default Feed

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Feed from './components/feed/Feed'
import Header from './components/header/Header'
import Login from './components/login/Login'
import Sidebar from './components/sidebar/Sidebar'
import { auth } from './firebase/firebase'
import { login, logout, selectUser } from './reducers/userSlice'

function App() {
	const user = useSelector(selectUser)
	const dispatch = useDispatch()

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.profilePic,
					})
				)
			} else {
				dispatch(logout())
			}
		})
	}, [])

	return (
		<div className='App'>
			<Header />

			{!user ? (
				<Login />
			) : (
				<div className='app__body'>
					<Sidebar />
					<Feed />
				</div>
			)}
		</div>
	)
}

export default App

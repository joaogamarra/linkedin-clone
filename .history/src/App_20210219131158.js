import './App.css'
import Feed from './components/feed/Feed'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='app__body'>
				<Sidebar />
				<Feed />
			</div>
		</div>
	)
}

export default App

import './Widgets.css'

import InfoIcon from '@material-ui/icons/Info'
import NewsArticle from './NewsArticle'

const Widgets = () => {
	return (
		<div className='widgets'>
			<div className='widgets__header'>
				<h2>Linkedin News</h2>
				<InfoIcon />
			</div>
			<NewsArticle heading='PAPA React is back' subtitle='Top news - 9099 readers' />
			<NewsArticle heading='Coronavirus UK updates' subtitle='Top news - 1299 readers' />
			<NewsArticle heading='Tesla hits new highs' subtitle='Cars auto - 3299 readers' />
			<NewsArticle heading='Bitcoin Breaks $22k' subtitle='Crypto - 1299 readers' />
			<NewsArticle heading='Is Redux whort it' subtitle='Code - 1299 readers' />
		</div>
	)
}

export default Widgets

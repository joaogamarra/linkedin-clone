import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import { FiberManualRecordIcon } from '@material-ui/icons/FiberManualRecord'

const widgets = () => {
	const newsArticle = (heading, subtitle) => (
		<div className='widgets__article'>
			<div className='widgets__articleLeft'>
				<FiberManualRecordIcon />
			</div>

			<div className='widgets__articleRight'>
				{heading}
				{subtitle}
			</div>
		</div>
	)

	return (
		<div className='widgets'>
			<div className='widgets__header'>
				<h2>Linkedin News</h2>
				<InfoIcon />
			</div>
			{newsArticle('PAPA React is back', 'Top news - 9099 readers')}
		</div>
	)
}

export default Widgets

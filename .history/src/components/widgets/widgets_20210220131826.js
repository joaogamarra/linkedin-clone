import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import { FiberManualRecordIcon } from '@material-ui/icons/FiberManualRecord'

const Widgets = () => {
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
		</div>
	)
}

export default Widgets

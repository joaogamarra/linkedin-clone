import { FiberManualRecordIcon } from '@material-ui/icons/FiberManualRecord'

const NewsArticle = ({ heading, subtitle }) => {
	return (
		<div className='widgets__article'>
			<div className='widgets__articleLeft'>
				<FiberManualRecordIcon />
			</div>
		</div>
	)
}

export default NewsArticle

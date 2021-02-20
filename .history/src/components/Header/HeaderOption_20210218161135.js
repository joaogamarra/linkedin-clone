import './HeaderOption.css'

const HeaderOption = ({ icon, title }) => {
	return (
		<div className='headerOption'>
			{icon && <icon className='headerOption__icon' />}
			<h3 className='headerOption__title'>{title}</h3>
		</div>
	)
}

export default HeaderOption

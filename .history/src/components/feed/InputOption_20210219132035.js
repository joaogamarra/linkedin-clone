import './InputOption.css'

const InputOption = ({ Icon, title, color }) => {
	return (
		<div className='inputOption'>
			<Icon style={{ color: color }} />
			{title}
		</div>
	)
}

export default InputOption

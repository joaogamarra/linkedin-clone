import './Login.css'

const Login = () => {
	return (
		<div className='login'>
			<img
				src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-Linkedin_Logo.svg__1.png?itok=q_lR0Vks'
				alt=''
			/>

			<form>
				<input placeholder='Full name (required if registering' type='text' />
			</form>
		</div>
	)
}

export default Login

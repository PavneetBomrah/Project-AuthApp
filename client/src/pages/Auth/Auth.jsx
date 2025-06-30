const Auth = () => {
  const handleLogin = () => {
    console.log('handleLogin called');
    localStorage.setItem('token','hola')
    console.log('token:',localStorage.getItem('token')); 
    window.location.path = '/'
  }
  return (
    <div>Auth
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Auth
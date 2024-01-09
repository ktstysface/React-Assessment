import './App.css'

function User() {
  return (
    <>
     <nav>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='owner'>Owner</a></li>
      </ul>
      </nav>
      <div className="showcase">
        <h1>Generation Thailand React - Assesement</h1> 
      </div>
      <div className='wrapper'>
        <a href="#" className='btn'> User Home Sector</a>
        <a href="#" className='btn'> Admin Home Sector</a>
      </div>
    </>
  )
}

export default User

import './App.css'

function App() {
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
        <a href="User" className='btn'> User Home Sector</a>
        <a href="Admin" className='btn'> Admin Home Sector</a>
      </div>
    </>
  )
}

export default App

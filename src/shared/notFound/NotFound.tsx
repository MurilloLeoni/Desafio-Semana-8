import { NavLink, Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <Link to='/' className='text-blue-500 hover:text-blue-800 underline text-lg mx-1'>Home</Link>
    </div>
  )
}

export default NotFound

import React, { useEffect, useState } from 'react'


const Header = (props) => {
  const [username, setUsername] = useState('Admin')

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      if (userData.role === 'admin') {
        setUsername('Admin')
      } else if (userData.data && userData.data.firstName) {
        setUsername(userData.data.firstName)
      }
    }
  }, [props.data]) // Runs when `props.data` changes

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')  // Use removeItem instead of setting ''
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br />
        <span className='text-3xl font-semibold'>{username} 👋</span>
      </h1>
      <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm hover:bg-red-700 cursor-pointer transition-transform duration-300 hover:scale-108'>
        Log Out
      </button>
    </div>
  )
}

export default Header

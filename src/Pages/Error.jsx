import React from 'react'
import { Link } from 'react-router-dom'

 function Error() {
  return (
    <>

    <div className="text-center text-white mt-40">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <Link to="/" className="text-yellow-500 underline">Go to Home</Link>
    </div>
    
    </>
  )
}

export default Error
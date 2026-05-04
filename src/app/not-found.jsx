import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='mt-20 mb-20 flex flex-col gap-4 justify-center items-center'>
        
        <h1 className='text-4xl font-bold text-blue-500'>This Page is Not found.</h1>

        <Link href={'/'}> <button className='btn btn-success'> Back to Home </button></Link>
      
    </div>
  )
}

export default NotFoundPage

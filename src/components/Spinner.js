import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
  return (
    <div>
        <div className='flex items-center justify-center mt-10'>
            <img src={loading}  />
        </div>
    </div>
  )
}

export default Spinner




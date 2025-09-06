import React from 'react'
import ThemeToggle from '../utils/ToggleButton'

const Info = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-between items-center px-4 text-sm lg:text-lg lg:px-10 py-2 text-white dark:bg-[#E4E4E4] bg-[#2C2C2C]'>
        <h1 className=' text-base capitalize dark:text-black/70  italic'>Investment makes life easier </h1>

        <span className='flex items-center gap-x-5'>
            <p className='text-sm dark:text-black/70'>Change View</p>
         <ThemeToggle/></span>
        
    </div>
  )
}

export default Info
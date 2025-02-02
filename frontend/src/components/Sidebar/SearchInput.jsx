import React from 'react'
import { IoSearchCircleSharp } from "react-icons/io5";

const Searchinput = () => {
  return (
    <form className='flex items-center gap-2'>
<input type='text' placeholder='Search' className='input input-bordered rounded-full'/> 
<button type='submit' className='btm btn-circle bg-sky-500 text-white'>
<IoSearchCircleSharp className='w-6 h-6 outline-0 '         />
</button>



    </form>
  )
}

export default Searchinput

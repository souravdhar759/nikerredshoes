import React from 'react'

function NavBar() {
    
  return (
    <>
    <div className='w-full h-16  flex item-center justify-between'>

        <img src="../nike.svg" alt=""  className='w-14 ml-4 my-2' />
<div className='h-8 flex item-center gap-6  font-semibold he my-5'>
        <a href="/">Manu</a>
        <a href="/">Location</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        </div>
<button className='bg-red-600 rounded-[15px] px-4 h-10 mr-2 my-3 text-center'>Login</button>
    </div>
    </>
  )
}

export default NavBar
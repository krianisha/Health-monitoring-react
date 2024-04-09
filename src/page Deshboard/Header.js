import React from 'react'

function Header({setisadding}) {
  return (
  
   <header>
    <h1>Health Monitoring System</h1>
    <div style={{marginTop: '30px',marginBottom: '18px'}}>
      <button onClick={()=>setisadding(true)} className='round-button'>Add Button</button>
    </div>
   </header>
  )
}

export default Header

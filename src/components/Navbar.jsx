import React from 'react'

function Navbar(props) {
  return (
    <div>
        <p>Theme is {props.theme}</p>
      
        <button onClick={()=>{
            props.set('Dark');
            console.log('theme change', props.theme);
        }}>
            Change Theme
        </button>
    </div>
  )
}

export default Navbar
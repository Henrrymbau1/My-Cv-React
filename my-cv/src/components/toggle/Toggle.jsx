import React, { useContext } from 'react'
import { ThemeContext } from '../context'
import "./toggle.css"


const Toggle = () => {
    const theme = useContext(ThemeContext)
    
    const handleClick = () =>{
        theme.dispatch({type: "TOGGLE"})
    }
  return (
    <div className="t">
        <img className="t-icon" src="https://cdn3.iconfinder.com/data/icons/meteocons/512/moon-black-512.png" alt="moon"/>
        <img className="t-icon" src="https://cdn.icon-icons.com/icons2/494/PNG/512/sun_icon-icons.com_48221.png" alt="sun"/>
        <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25 }}></div>
    </div>
  )
}

export default Toggle
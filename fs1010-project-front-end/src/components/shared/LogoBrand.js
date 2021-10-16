import React from 'react'
import { FaRegSmileWink } from "react-icons/fa"
import "../../css/logo.css"

const LogoBrand = () => {
    return (
        <div className="logoBrand-container">
            <div id="logo">
                <FaRegSmileWink 
                    className="smiley"
            />  
                <div id="logo-sm-circle-unfilled">Hi!</div>
            </div>
            <div className="logo-text">@Nolita's Site</div> 
      </div>
    )
}

export default LogoBrand
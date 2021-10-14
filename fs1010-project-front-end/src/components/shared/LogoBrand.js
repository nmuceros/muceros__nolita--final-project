import React from 'react'
import { FaRegSmileWink } from "react-icons/fa"
// import { Spinner } from 'reactstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import "../../css/logo.css"

const LogoBrand = () => {
    return (
        <div className="logoBrand-container">
            <div id="logo">

            {/* <Spinner animation="border" variant="primary" />
            <Spinner animation="border" size="sm" />
            <Spinner animation="border" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" /> */}
                <FaRegSmileWink 
                    className="smiley"
                />  
                <div id="logo-sm-circle-unfilled">Hi!</div>
                 
            </div>
            <div className="logo-text">Nolita's Site</div> 
    </div>

    )

}

export default LogoBrand
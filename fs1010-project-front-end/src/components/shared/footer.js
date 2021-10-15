import React, { useState } from 'react'
import twitter from "../../images/twitter.svg"
import facebook from "../../images/facebook2.svg"
import linkedin from "../../images/linkedin.svg"
import instagram from "../../images/instagram.svg"
import "../../css/footer.css"


const Footer = () => {

    const social = [
        {icon: twitter, link: "https://twitter.com/i/flow/login"},
        {icon: facebook, link: "https://www.facebook.com/login/"},
        {icon: linkedin, link: "https://www.linkedin.com/login"},
        {icon: instagram, link: "https://www.instagram.com/accounts/login/"}
    ]    
    const [selectedSocial, setSelectedSocial] = useState(null);  

    return (  
        <footer className="py-3 bg-dark">
            <div>
                <div className="m-0 text-center text-white">
                    <div className="social-container">
                        {
                        social.map(social => 
                            <div className="social-image-container">
                                <a href={social.link}>
                                <img className="img-social" src={social.icon} alt="social-image" onClick={() => setSelectedSocial(social.icon)} />
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                {/* <p className="m-0 text-center text-white">Copyright &copy; 2021 Nolita Muceros</p>  */}      
            </div>      
        </footer>

    )
}

export default Footer
import React, { useState } from 'react'
import twitter from "../../images/twitter5.jpeg"
import facebook from "../../images/facebook3.jpeg"
import linkedin from "../../images/linkedIn2.jpeg"
import instagram from "../../images/instagram.jpeg"
import "../../css/footer.css"
import Container from 'reactstrap/lib/Container'


const Footer = () => {

    const social = [
        {id: 1, icon: twitter, link: "https://twitter.com/i/flow/login"},
        {id: 2, icon: facebook, link: "https://www.facebook.com/login/"},
        {id: 3, icon: linkedin, link: "https://www.linkedin.com/login"},
        {id: 4, icon: instagram, link: "https://www.instagram.com/accounts/login/"}
    ]    
    const [selectedSocial, setSelectedSocial] = useState(null);  

    return (  
        <Container id="footer" fluid >
            <footer  >
                <div>
                    <div className="m-0 text-center text-white">
                        <div className="social-container" >
                            {
                            social.map(social => 
                                <div className="social-image-container" key={social.id} >
                                    <a href={social.link}>
                                    <img className="img-social" src={social.icon} alt="social-image" onClick={() => setSelectedSocial(social.icon)} />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                    <p id="footer-copyright" className="m-0 text-center ">Copyright &copy; 2021 Nolita Muceros</p>       
                </div>      
            </footer>
        </Container>                        

    )
}

export default Footer
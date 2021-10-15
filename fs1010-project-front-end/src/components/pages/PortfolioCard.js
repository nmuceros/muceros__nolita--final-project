import React, { useState } from "react"
import { Container, Card, CardBody, CardImg, CardSubtitle, CardTitle, CardText, CardFooter, Button, Collapse } from "reactstrap"
import { CgDetailsMore } from "react-icons/cg"
import { FaGitSquare } from "react-icons/fa"
import { FiLink } from "react-icons/fi"
import "../../css/portfolioCard.css"



const PortfolioCard = (project) => {

    const [selectProject, setSelectedProject] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container>
            <Card id="portfolio-card-container" >
                <div className="portfolio-cardImage-container">
                    <CardImg id="portfolio-cardImage-creativeResonance" width="100%" src={project.projectImage} alt="Card image cap" />
                </div>
                <CardBody>
                    <CardTitle id="portfolio-cardTitle" tag="h4">{project.projectName}</CardTitle>
                    <div>
                        <div className="portfolio-card-links">
                            <a className="portfolio-collapse-icon" onClick={toggle} href="#">
                                <CgDetailsMore />
                            </a>
                            <a className="portfolio-gitLink-icon" href={project.projectLink}>
                                {/* <FaGitSquare /> */}
                                <FiLink />
                            </a>
                        </div>
                        <Collapse className="portfolio-collapse" isOpen={isOpen}>
                               {project.projectDesc}
                        </Collapse>
                    </div>

                </CardBody>
            </Card>            
        </Container>
    )    
}

export default PortfolioCard
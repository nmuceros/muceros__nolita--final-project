import React, { useState } from "react"
import { Container, Card, CardBody, CardImg, CardSubtitle, CardTitle, Collapse } from "reactstrap"
import { MdOutlineReadMore} from "react-icons/md"
import { BsLink } from "react-icons/bs"
import "../../css/portfolioCard.css"


const PortfolioCard = (project) => {

    // const [selectProject, setSelectedProject] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container>
            <Card id="portfolio-card-container" >
                <div className="portfolio-cardImage-container">
                    <CardImg id="portfolio-cardImage-image" width="100%" src={project.projectImage} alt="Card image cap" />
                </div>
                <CardBody>
                    <CardTitle id="portfolio-cardTitle" tag="h4">{project.projectName}</CardTitle>
                    <CardSubtitle id="portfolio-cardSubTitle" ag="h6" className="mb-2 text-muted">{project.projectSubTitle}</CardSubtitle> 
                    <div>
                        <div className="portfolio-card-links">
                            <a className="portfolio-showmore-icon" onClick={toggle} href="#">
                                <MdOutlineReadMore />
                            </a>
                            <a className="portfolio-gitLink-icon" href={project.projectLink}>
                                <BsLink />
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
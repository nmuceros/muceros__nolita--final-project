import React, { useState } from "react"
import { Container, Card, CardBody, CardImg, CardSubtitle, CardTitle, CardText, CardFooter, Button, Collapse } from "reactstrap"
import "../../css/portfolioCard.css"



const PortfolioCard = (project) => {

    const [selectProject, setSelectedProject] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    // const handleMore = () => {
    //     setSelectedProject({
    //         projectID: projectObject.projectID,
    //         projectName: projectObject.projectName,
    //         projectImage: projectObject.projectImage,
    //         projectbBuiltBy: projectObject.projectbBuiltBy,      
    //         projectTitle: projectObject.projectTitle,     
    //         projectDesc: projectObject.projectDesc
    //     });
    //     setIsOpen(!isOpen);
    // }

    return (
        <Container>
            <Card id="portfolio-card-container" >
                <div className="portfolio-cardImage-container">
                    <CardImg id="portfolio-cardImage-creativeResonance" width="100%" src={project.projectImage} alt="Card image cap" />
                </div>
                <CardBody>
                    <CardTitle id="portfolio-cardTitle" tag="h4">{project.projectName}</CardTitle>


                    <div>
                    <Button className="portfolio-collapse-button" color="secondary" onClick={toggle}  style={{ marginBottom: '1rem' }}>Details</Button>
                        <Collapse className="portfolio-collapse" isOpen={isOpen}>
                            {/* <Card> */}
                                {/* <CardBody> */}
                               {project.projectDesc}
                                {/* </CardBody> */}
                                {/* </Card> */}
                        </Collapse>
                    </div>

                </CardBody>

                {/* <CardBody>
                    <CardTitle id="portfolio-cardTitle" tag="h5">{project.projectName}</CardTitle>
                    <CardSubtitle id="portfolio-cardSubTitle" ag="h6" className="mb-2 text-muted">{project.projectDesc}</CardSubtitle>  
                    <CardText id="portfolio-cardText">{project.projectDesc}</CardText>
                    <Button id="portfolio-collapse-button" color="secondary" size="sm">Button</Button>
                </CardBody>        */}

            </Card>            

        </Container>
    )    
}

export default PortfolioCard
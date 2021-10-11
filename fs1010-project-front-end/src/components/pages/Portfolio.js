import React, { useState } from 'react';
import { Container, Row, Col, Button, CardBody, CardImg, CardSubtitle, CardTitle, CardText, CardFooter, Card } from "reactstrap"
import { Collapse } from 'reactstrap';
import "../../css/portfolio.css"
import creativeResonance from "../../images/creativeResonance.jpg"
import photoGallery from "../../images/photoGallery.png"
import todoApp from "../../images/todoApp.png"

const Portfolio = () => {  
    
    let projects = [
        {
          projectID: "1",  
          projectImage: creativeResonance,
          projectName: "Creative Resonance",          
          projectDesc: "This is a Web Application showcasing the Music Album photo collections from different genres. It has music which automatically plays while a selected genre is being viewed. It is a group effort from FS1000 Music Group. The Admin page is my major contribution to this project."        
        },
        {
            projectID: "2",              
            projectImage: photoGallery,               
            projectName: "Photo Gallery",
            projectDesc: "This Web Application is an independent work of mine showcasing the photo collection of the Historical Sites of City of Toronto. This comes with an overlay on hover of images as well as a custom styled zoom modal view upon clicking on a photo."        
          },
          {
            projectID: "3",    
            projectImage: todoApp,                           
            projectName: "Todo App",  
            projectDesc: "This Todo Web Application is an independent work of mine. Unlike normal Todo application, this has an interesting drag and drop effect. "        
          },          
      ];


    // const [selectedProject, setSelectedProject] = useState(null); 
    // const [isOpen, setIsOpen] = useState(false);
    // const handleMore = (e, projectObject) => {
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
            <main>
                <Row id="txtQuote-container" className="my-5">
                        <div className="txtQuote">
                            "Happiness in what you do is the key to success!"
                        </div>
                </Row>

                <Row id="txtTakeALook-container">
                     <div className="txtTakeAlook">
                        <p>Please take a look at the sample projects I have enjoyed building so far...</p>
                    </div>                    
                </Row>

                <Row>

                    {projects.map((projectObject) => (
                        // <p>projectObject.projectName</p>
                        // console.log(projectObject.projectName)
                    
                        <Col md="4" className="mb-5">
                            <div key={projectObject.projectID}>                         
                                <Card id="portfolio-card-container">
                                    <div className="portfolio-cardImage-container">
                                        <CardImg id="portfolio-cardImage-creativeResonance" width="100%" src={projectObject.projectImage} alt="Card image cap" />
                                    </div>

                                    {/* <CardBody>
                                        <CardTitle id="portfolio-cardTitle" tag="h5">{projectObject.name}</CardTitle>
                                        <CardSubtitle id="portfolio-cardSubTitle" ag="h6" className="mb-2 text-muted">{projectObject.ProjectBuiltBy}</CardSubtitle>
                                    
                                        <div ey={projectObject.projectID}>
                                            <Button outline color="secondary" size="sm" onClick={(e) => handleMore(e,projectObject)}
                                                style={{ 
                                                    marginBottom: '1rem'
                                                }}
                                            >
                                                More...
                                            </Button>
                                            <Collapse isOpen={isOpen}>
                                                <Card>
                                                    <CardBody id="portfolio-cardText">
                                                        {projectObject.projectDesc}
                                                    </CardBody>
                                                </Card>
                                            </Collapse>
                                        </div>                                    
                                    </CardBody> */}

                                    <CardBody>
                                        <CardTitle id="portfolio-cardTitle" tag="h5">{projectObject.projectName}</CardTitle>
                                        {/* <CardSubtitle id="portfolio-cardSubTitle" ag="h6" className="mb-2 text-muted">{projectObject.projectb}</CardSubtitle> */}
                                        <CardText id="portfolio-cardText">{projectObject.projectDesc}</CardText>
                                        <Button id="portfolio-collapse-button" color="secondary" size="sm">Button</Button>
                                    </CardBody>      

                                </Card>
                            </div>    
                        </Col>                                
                    ))}    
                </Row>
            </main>
        </Container>
    )
}

export default Portfolio
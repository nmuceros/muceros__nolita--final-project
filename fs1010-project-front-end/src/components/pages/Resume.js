import React from "react"
import { Container, Row, Col } from "reactstrap"
import "../../css/resume.css"
import { GoLocation } from "react-icons/go"
import { MdOutlineEmail } from "react-icons/md"
import { FiPhone } from "react-icons/fi"
import { GiDiploma } from "react-icons/gi"
import { BiHighlight } from "react-icons/bi"
import { FaRegHandshake } from "react-icons/fa"
import { BsArrowUpSquare } from "react-icons/bs"
import { MdVerticalAlignTop } from "react-icons/md"
import { grey } from "color-name"

const Resume = () => {
    return (
        <Container fluid>
            <main>
                {/* <section> */}
                <div id="placeholder">Bottom</div>
                <Row className="my-8">
                    {/* <div id="resume-container"> */}

                        <Col lg="2">
                            <div id="sidebar">
                                <nav className="verticalNavBar">
                                    <ul className="verticalNavBar-ul">
                                        <li className="verticalNavBar-li"><a href="#highlights" className="defaultMenuItem">
                                        <BiHighlight 
                                            style={{
                                                fontSize: "3rem"
                                            }}
                                        />
                                        Highlights</a></li>
                                        <li className="verticalNavBar-li"><a href="#top-experience">
                                            <FaRegHandshake 
                                                style={{
                                                    fontSize: "3rem"
                                                }}                                            
                                            />
                                            Experience</a></li>
                                        <li className="verticalNavBar-li"><a href="#top-education">
                                            <GiDiploma 
                                                style={{
                                                    fontSize: "3rem"
                                                }}                                            
                                            />
                                            Education</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </Col>

                        <Col lg="10">
                            <div id="resume-container">

                                <Row>   
                                    <div className="resume-header-container">

                                        <Col lg="7" sm="12">
                                            <div id="objective-container">
                                                <div className="objectiveTitle">Objective:</div>
                                                <div className="objective">
                                                    <p style={{
                                                            marginleft: "20px",
                                                            marginright: "20px"
                                                         }}
                                                     >
                                                    Self-motivated and team player with years of experience as Developer seeking a
                                                    position as a Web
                                                    Developer where I can apply my enhanced knowledge in Web Design and Development to meet client
                                                    standards and specifications
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg="5" sm="12">
                                            <div id="contactInfo-container">
                                                <div className="address">
                                                    <GoLocation 
                                                        style={{
                                                            fontSize: "1.5rem"
                                                        }}                                                        
                                                    />
                                                    {'  '}Tottenham, ON L0G1W0
                                                </div>
                                                <div className="telephone">
                                                    {/* <img src={phone} alt="phone icone"/> */}
                                                    <FiPhone 
                                                        style={{
                                                            fontSize: "1.5rem"
                                                        }}                                                      
                                                    />
                                                    {'  '}(647) 674-3709
                                                </div>
                                                <div className="email">
                                                    {/* <img src={eMail} alt="email icon"/> */}
                                                    <MdOutlineEmail 
                                                        style={{
                                                            fontSize: "1.5rem"
                                                        }}                                                      
                                                    />
                                                        {'  '}nolitsmuceros@yahoo.com
                                                </div>
                                            </div>
                                        </Col>
                                    </div>                                          
                                </Row>  

                        
                                <Row>
                                    <div>                        
                                        <Row>
                                            <div className="highlights-container">
                                                <div className="highlightsTitle">HIGHLIGHTS OF QUALIFICATIONS</div>
                                                <div className="highlights-contents-container">
                                                    <ul className="mainBullet" 
                                                        style={{
                                                            listStyleType: "circle"
                                                        }}
                                                    
                                                    >
                                                        <li
                                                            style={{
                                                                listStyleType: "circle"
                                                              }}
            
                                                        >
                                                            Currently expanding skill set:
                                                        </li><br></br>
                                                            <ul className="highlights-ul" 
                                                                style={{
                                                                    textalign: "left"
                                                                }
                                                            }>
                                                                <li><b>Font-end: </b>HTML5, CSS3, Bootstrap, JavaScript (ES6+), JSX, HTML DOM, React, AJAX</li> <br></br>
                                                                <li><b>Back-end: </b>Node.js, Express.js, REST, Restful Routes</li> <br></br>
                                                                <li><b>Database: </b>MySQL, MySQL Workbench, MongoD</li> <br></br>
                                                                <li><b>Others: </b>Promises, JASON, DOM API, Restful API, Fetch API, Draw.io, Docker, GCP (Google Cloud Platform),
                                                                    AWS (Amazon Web Services), Git/GitLab, Trello, Authentication and Security, Filesystem operations, Automated
                                                                    testing, Build Tooling, Modelling tools</li>
                                                            </ul> <br></br>
                                                        <li>Three years experience as Developer</li> <br></br>
                                                        <li>With some experience in Automated Testing – UFT</li> <br></br>
                                                        <li>With years of experience in UI/Regression/QA Testing</li> <br></br>
                                                        <li>Excellent ability to plan, organize, prioritize work and meet deadlines</li> <br></br>
                                                        <li>Flexible, hardworking, adaptable, team player and can work independently</li> <br></br>
                                                    </ul>
                                                </div>    
                                            </div>
                                        </Row>   

                                        <Row>
                                            <div className="experience-container">
                                                <a href="#placeholder" id="top-experience">
                                                <MdVerticalAlignTop 
                                                        style={{
                                                            fontSize: "1.5rem",
                                                            color: "white"
                                                        }}            
                                                  />
                                                </a>
                                                <div className="experienceTitle">WORK EXPERIENCE</div>
                                                <a href="#placeholder" id="top" style={{paddingTop: "10px"}}>
                                                  <MdVerticalAlignTop 
                                                        style={{
                                                            fontSize: "1.5rem",
                                                            color: "white"
                                                        }}            
                                                  />
                                                </a>                                    
                                                <br></br>
                                                <div className="experience-contents-container">
                                                    <p className="job"><b>IT Analyst / QA Analyst / Systems Specialist</b><br></br>
                                                        <b>Honda Canada Inc. ~ 2012 to Present</b><br></br>
                                                        <b>Honda Financial Services Inc. ~ 2010 to 2012</b> 
                                                    </p>
                                                    <ul>
                                                        <li>Automated internal manual reports using VBScript</li><br></br>
                                                        <li>Developed/executed automated test scripts using HP UFT</li>
                                                        <li><p>Planned and developed Test Plans and Test Cases to ensure development outputs meet defined
                                                                specification cases in coordination with Business requirements, Technical Specifications, installers
                                                                / upgrades documents, and management</p>
                                                        </li>
                                                        <li>Performed Functional/Regression/SIT/Smoke/UI/QA testing and analyzed results</li>
                                                        <li>
                                                            <p>Manages Systems access provisioning and ensure compliance with Sarbanes-Oxley Act (SOX) as pertains
                                                                to Honda Financial Services Inc. internal controls</p>
                                                        </li>
                                                        <li>
                                                            <p>Maintains excellent channels of communication with all customers (internal clients) and internal IT
                                                                departments</p>
                                                        </li>
                                                        <li>
                                                            <p>Ensured all Service Level Agreements are maintained and issues/requests are resolved as per this
                                                                commitment</p>
                                                        </li>
                                                    </ul><br></br>
                                                    <p className="job"><b>Credit Administrator / Credit Coordinator </b><br></br>
                                                        <b>Honda Financial Services Inc. ~ 2007 to 2010</b>
                                                    </p>
                                                    <ul>
                                                        <li>Automated Loan/Lease Assumption Contract using VBScript</li>
                                                        <li>Automated internal manual reports using VBScript</li>
                                                        <li>Processed retail and lease contracts, rebooks and balloon refinancing via internal System</li>
                                                        <li>Maintained strong dealer relationships by dealing with their inquiries promptly and professionally</li>
                                                    </ul><br></br>
                                                    <p className="job"><b>Office Support / Quality Clerk</b><br></br>
                                                        <b>Imperial Oil and SVE, Inc ~ 2001 to 2002</b>
                                                    </p>
                                                    <ul>
                                                        <li>Automated internal manual reports using VBScript</li>
                                                        <li>Maintained Invoice MS Access database</li>
                                                        <li>Maintained and controlled company’s Documents Change Request File (manually and electronically)</li>
                                                        <li>Processed invoices via internal system</li>
                                                    </ul><br></br>
                                                    <p className="job"><b>Computer Programmer</b>
                                                        <b>Delco Wire and Cable Corporation ~ 2000 to 2001</b>
                                                    </p>
                                                    <ul>
                                                        <li>Enhanced and maintained Sales and Accounts Receivable System per business requirements</li>
                                                        <li>Analyzed and resolved issues relating to business Systems and ensured internal control is met</li>
                                                        <li>Prepared and maintained System Training Manual and Functional Specifications Manuals</li>
                                                    </ul><br></br>
                                                    <p className="job"><b>Computer Programmer</b><br></br>
                                                        <b>Nancy T. Ang and Associates ~ 1997 to 2000</b>
                                                    </p>
                                                    <ul>
                                                        <li><p>Enhanced and maintained various customized systems per client requirements:<br></br>
                                                            <b>Custom applications: </b><br></br>
                                                            -Sales and Accounts Receivable System<br></br>
                                                            -General Ledger and Budget Monitoring System<br></br>
                                                            -Inventory Control System<br></br><br></br>
                                                            <b>Technologies: </b><br></br>
                                                            Clipper 5.2/ dBase / FoxPro 2.6 / Visual FoxPro 6.0 / DOS / NOVELL 3.12 / WINDOWS NT 4.0</p>
                                                        </li>
                                                        <li>Converted existing programs from Clipper to FoxPro</li><br></br>
                                                        <li>Provided technical supports to system users</li>
                                                    </ul><br></br>
                                                    <p className="job"><b>Office Clerk</b>
                                                        <b>Shoemart, Inc.  ~ 1996 to 1997</b>
                                                    </p>
                                                    <ul>
                                                        <li>Performed clerical duties and responsibilitites related to consignment processing</li>
                                                    </ul>   
                                                </div>        
                                            </div>           
                                        </Row>    

                                        <Row>
                                            <div className="education-container">
                                                <a href="#placeholder" id="top-education">
                                                <MdVerticalAlignTop 
                                                        style={{
                                                            fontSize: "1.5rem",
                                                            color: "white"
                                                        }}            
                                                  />
                                                </a>
                                                <div className="educationTitle">EDUCATION</div>
                                                <a href="#placeholder" id="top">
                                                <MdVerticalAlignTop 
                                                        style={{
                                                            fontSize: "1.5rem",
                                                            color: "white"
                                                        }}            
                                                  />
                                                </a>   
                                                <div className="education-contents-container">            
                                                    <p className="education"><b>Full-Stack Web Development</b><br></br>
                                                        York University ~ On-Going
                                                    </p><br></br>
                                                    <p className="education"><b>Diploma in Programming Visual Basic 6.0</b><br></br>
                                                        Professional Career Development Institute ~ 2002 to 2003 
                                                    </p><br></br>
                                                    <p className="education"><b>Certificate in Visual FoxPro Version 5.0 Advance Programming</b><br></br>
                                                        Informatix Computer Institute ~ 1999
                                                    </p><br></br>
                                                    <p className="education"><b>Master of Science in Computer Science</b><br></br>
                                                        Central Colleges of the Philippines ~ 1992 to 1998
                                                    </p><br></br>                                                                            
                                                    <p className="education"><b>Bachelor of Science in Business Administration Major in Computer Science</b><br></br>
                                                        Central Colleges of the Philippines ~ 1992 to 1996
                                                    </p>
                                                    {/* <a href="#main" id="top">[Top]</a>                                         */}
                                                </div>
                                            </div>
                                        </Row>     
                                    </div>                    
                                </Row>    
                             </div>   
                        </Col>
                    {/* </div>     */}
                </Row>
                
                {/* </section> */}
            </main>
    </Container>
    )
}

export default Resume
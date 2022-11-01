import React, { Component } from 'react';
import Pdf from './../CCPCert.pdf'

class Resume extends Component {
  render() {

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span style = {{color: '#CCD6F6'}}>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
               <div ><h3 style = {{color: '#CCD6F6'}}>{"Georgia Institute of Technology"}</h3>
                  <p className="info">{"BS in Computer Science"}<span>&bull;</span> <em className="date">{"2019 - 2022"}</em><span>&bull;</span><em className="date">{"GPA: 3.95"}</em></p>
                  <p className="info">{"MS in Computer Science"}<span>&bull;</span> <em className="date">{"Expected July 2023"}</em></p>
              </div>
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span style = {{color: '#CCD6F6'}}>Work Experience</span></h1>
         </div>

         <div className="nine columns main-col">
         <div ><h3 style = {{color: '#CCD6F6'}}>{"Google"}</h3>
            <p className="info">{"Software Engineer Intern"}<span>&bull;</span> <em className="date">{"August 2022 - November 2022"}</em></p>
            <ul>
               {/* <li style = {{listStyleType: 'circle'}}>Build a DevOps SKU cleanup utility to cleanup 120 million+ SKU data from the entire system.</li>
               <li style = {{listStyleType: 'circle'}}>Utilize AWS services such as Lambda, Step Function, DynamoDB, S3, Event Bridge, and CloudTrail.</li>
               <li style = {{listStyleType: 'circle'}}>Plan and create a low-level design document working backwards from the customer’s perspective.</li>
               <li style = {{listStyleType: 'circle'}}>Test all code with mock unit testing, integration testing, and embedded testing.</li>
               <li style = {{listStyleType: 'circle'}}>Collaborate with full SDEs on extensive code reviews and project design.</li>
               <li style = {{listStyleType: 'circle'}}>Present finished and working utility demo to AWS FinTech executives.</li> */}
            </ul>
        </div>
         <div ><h3 style = {{color: '#CCD6F6'}}>{"Cowen"}</h3>
            <p className="info">{"Derivatives Summer Analyst"}<span>&bull;</span> <em className="date">{"June 2022 - August 2022"}</em></p>
            <ul>
               {/* <li style = {{listStyleType: 'circle'}}>Build a DevOps SKU cleanup utility to cleanup 120 million+ SKU data from the entire system.</li>
               <li style = {{listStyleType: 'circle'}}>Utilize AWS services such as Lambda, Step Function, DynamoDB, S3, Event Bridge, and CloudTrail.</li>
               <li style = {{listStyleType: 'circle'}}>Plan and create a low-level design document working backwards from the customer’s perspective.</li>
               <li style = {{listStyleType: 'circle'}}>Test all code with mock unit testing, integration testing, and embedded testing.</li>
               <li style = {{listStyleType: 'circle'}}>Collaborate with full SDEs on extensive code reviews and project design.</li>
               <li style = {{listStyleType: 'circle'}}>Present finished and working utility demo to AWS FinTech executives.</li> */}
            </ul>
        </div>
        <div ><h3 style = {{color: '#CCD6F6'}}>{"Southwest Airlines"}</h3>
            <p className="info">{"Software Engineer Intern"}<span>&bull;</span> <em className="date">{"January 2022 - April 2022"}</em></p>
            <ul>
               {/* <li style = {{listStyleType: 'circle'}}>Build a DevOps SKU cleanup utility to cleanup 120 million+ SKU data from the entire system.</li>
               <li style = {{listStyleType: 'circle'}}>Utilize AWS services such as Lambda, Step Function, DynamoDB, S3, Event Bridge, and CloudTrail.</li>
               <li style = {{listStyleType: 'circle'}}>Plan and create a low-level design document working backwards from the customer’s perspective.</li>
               <li style = {{listStyleType: 'circle'}}>Test all code with mock unit testing, integration testing, and embedded testing.</li>
               <li style = {{listStyleType: 'circle'}}>Collaborate with full SDEs on extensive code reviews and project design.</li>
               <li style = {{listStyleType: 'circle'}}>Present finished and working utility demo to AWS FinTech executives.</li> */}
            </ul>
        </div>
         <div ><h3 style = {{color: '#CCD6F6'}}>{"Amazon"}</h3>
            <p className="info">{"Software Engineering Intern | FinTech"}<span>&bull;</span> <em className="date">{"June 2021 - September 2021"}</em></p>
            <ul>
               <li style = {{listStyleType: 'circle'}}>Build a DevOps SKU cleanup utility to cleanup 120 million+ SKU data from the entire system.</li>
               <li style = {{listStyleType: 'circle'}}>Utilize AWS services such as Lambda, Step Function, DynamoDB, S3, Event Bridge, and CloudTrail.</li>
               <li style = {{listStyleType: 'circle'}}>Plan and create a low-level design document working backwards from the customer’s perspective.</li>
               <li style = {{listStyleType: 'circle'}}>Test all code with mock unit testing, integration testing, and embedded testing.</li>
               <li style = {{listStyleType: 'circle'}}>Collaborate with full SDEs on extensive code reviews and project design.</li>
               <li style = {{listStyleType: 'circle'}}>Present finished and working utility demo to AWS FinTech executives.</li>
            </ul>
        </div>
         <div ><h3 style = {{color: '#CCD6F6'}}>{"GTRI Cipher Lab"}</h3>
            <p className="info">{"Full Stack Web App Development Intern"}<span>&bull;</span> <em className="date">{"May 2020 - December 2020"}</em></p>
            <ul>
               <li style = {{listStyleType: 'circle'}}>Built inventory management app for business operations team to track 1000+ assets.</li>
               <li style = {{listStyleType: 'circle'}}>Utilized ReactJS and Material UI to build administrative dashboard to track data and analyze trends.</li>
               <li style = {{listStyleType: 'circle'}}>Developed in NodeJS to create REST API routes, session management, and security middleware.</li>
               <li style = {{listStyleType: 'circle'}}>Designed large scale data base schemas based on stakeholder requirements.</li>
               <li style = {{listStyleType: 'circle'}}>Followed software development lifecycle using agile/scrum methodology and performed code reviews.</li>
               <li style = {{listStyleType: 'circle'}}>Deployed apps on servers through Docker containers/Kubernetes.</li>
               <li style = {{listStyleType: 'circle'}}>Utilized Git version control with Bitbucket and Gitlab.</li>
            </ul>
        </div>
        </div>
    </div>
   
    <div className="row work">

    <div className="three columns header-col">
            <h1><span style = {{color: '#CCD6F6'}}>Proficiencies</span></h1>
         </div>

         <div className="nine columns main-col">
         <div style={{float: "left", width: "50%"}}>
            <ul style = {{color: '#CCD6F6'}}>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>C</li>
            <li>Git</li>
            <li>CSS</li>
            </ul>
         </div>
         <div style={{float: 'right', width: "50%"}}>
            <ul style = {{color: '#CCD6F6'}}>
               <li>AWS Services</li>
            <li>ReactJS</li>
            <li>NodeJS/Express</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>HTML</li>
            </ul>
         </div>
        </div>
    </div>

    <div className="row work">

<div className="three columns header-col">
        <h1><span style = {{color: '#CCD6F6'}}>Certifications</span></h1>
     </div>

     <div className="nine columns main-col">
     <div style={{float: "left", width: "50%"}}>
        <ul style = {{color: '#CCD6F6'}}>
        <a href={Pdf} rel="noopener noreferrer" target="_blank" >AWS Certified Cloud Practitioner</a>
        </ul>
     </div>
     <div style={{float: 'right', width: "50%"}}>
            <ul style = {{color: '#CCD6F6'}}>
               {/* <a href={Pdf} rel="noopener noreferrer" target="_blank" >See Certificate</a> */}
            </ul>
         </div>
    </div>
</div>

    
   </section>
    );
  }
}

export default Resume;

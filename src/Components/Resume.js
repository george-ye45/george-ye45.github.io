import React, { Component } from 'react';

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
                  <p className="info">{"BS in Computer Science"}<span>&bull;</span> <em className="date">{"Expected May 2022"}</em></p>
                  <p className="info">{"MS in Computer Science"}<span>&bull;</span> <em className="date">{"Expected May 2023"}</em></p>
                  <p>{"GPA: 3.94/4.0"}</p>
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
         <div ><h3 style = {{color: '#CCD6F6'}}>{"Amazon"}</h3>
            <p className="info">{"Software Development Intern | FinTech"}<span>&bull;</span> <em className="date">{"May 2021 - Present"}</em></p>
            <p> </p>
        </div>
         <div ><h3 style = {{color: '#CCD6F6'}}>{"GTRI Cipher Lab"}</h3>
            <p className="info">{"Full Stack Web App Development Intern"}<span>&bull;</span> <em className="date">{"May 2020 - December 2020"}</em></p>
            •	Develop in ReactJS and Material UI to build dynamic and reusable components.<br/>
            •	Develop in NodeJS to create REST API routes, authentication and security logic, and session management.<br/>
            •	Design relational databases with MySQL and NoSQL databases with MongoDB.<br/>
            •	Collaborate with team members on schemas, layouts and code reviews given stakeholder requirements.<br/>
            •	Apply concepts from algorithm design/data structures in increase efficiency of existing code and components.<br/>
            •	Follow software development lifecycle and perform unit testing, function testing, and integration testing.<br/>
            •	Deploy apps on servers through Docker containers/Kubernetes and use agile/scrum methodology.<br/>
            •	Utilize Git version control with Bitbucket and Gitlab.<br/>
            <p> </p>
        </div>
        <div ><h3 style = {{color: '#CCD6F6'}}>{"Georgia Tech Office of Information Technology"}</h3>
            <p className="info">{"Desktop IT Support"}<span>&bull;</span> <em className="date">{"December 2019 - May 2020"}</em></p>
            •	Provide level 2 technical support for major IT department (500+ users).<br/>
            •	Assisted users with account setup using Active Directory and achieved high user satisfaction.<br/>
            •	Rapidly learned to new technologies such as case management system ServiceNow and PuTTY to solve issues.<br/>
            •	Set up and image 50+ laptops and machines for employees to transition to work at home during COVID.<br/>
            <p> </p>
        </div>
        <div ><h3 style = {{color: '#CCD6F6'}}>{"Self - Employed"}</h3>
            <p className="info">{"Math Tutor"}<span>&bull;</span> <em className="date">{"September 2017 - May 2019"}</em></p>
            • Communicated with clients on expectations, plans, and strategies.<br/>
            • Created individualized lesson plans with lectures and homework.<br/>
            • Utilized time/project management skills to successfully balance business/school.<br/>
            • Delivered outstanding results and developed long term customer relationships.<br/>
            <p> </p>
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
            </ul>
         </div>
         <div style={{float: 'right', width: "50%"}}>
            <ul style = {{color: '#CCD6F6'}}>
            <li>ReactJS</li>
            <li>NodeJS/Express</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>HTML, CSS</li>
            </ul>
         </div>
        </div>
    </div>
   </section>
    );
  }
}

export default Resume;

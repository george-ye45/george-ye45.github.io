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
                  <p className="info">{"BSc in Computer Science"}<span>&bull;</span> <em className="date">{"Expected May 2022"}</em></p>
                  <p>{"GPA: 3.9/4.0"}</p>
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
         <div ><h3 style = {{color: '#CCD6F6'}}>{"GTRI Cipher Lab"}</h3>
            <p className="info">{"Full Stack Web App Development Intern"}<span>&bull;</span> <em className="date">{"May 2020 - Present"}</em></p>
            • Develop in ReactJS, JS, HTML, CSS, and Material UI libraries to build dynamic components.<br/>
            • Develop in NodeJS and Express for server-side Rest API routes, authentication, and logging.<br/>
            • Build and manage relational databases with MySQL and NoSQL databases with MongoDB. <br/>
            • Perform unit testing, function testing, and integration testing. <br/>
            • Deploy applications using agile/scrum and software development cycle methodologies. <br/>
            <p> </p>
        </div>
        <div ><h3 style = {{color: '#CCD6F6'}}>{"Georgia Tech Office of Information Technology"}</h3>
            <p className="info">{"Desktop IT Support"}<span>&bull;</span> <em className="date">{"December 2019 - May 2020"}</em></p>
            • Assisted clients using ServiceNow, Bomgar, and over the phone.<br/>
            • Worked with Active Directory, user info with PuTTY, and other IT applications.<br/>
            • Assisted with device management tasks such as computer imaging and inventory.<br/>
            • Documented articles to the current IT knowledge base.<br/>
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

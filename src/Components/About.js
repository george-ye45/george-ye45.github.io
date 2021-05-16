import React, { Component } from 'react';
import Pdf from './../Resume.pdf'

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }
    let bio = "Hi! My name is George Ye. Based in Atlanta, GA, I am an undergraduate student pursuing a Bachelors/Masters Degree in Computer Science at the Georgia Institute of Technology. I have an expected graduation date of May 2022 for my Bachelor's Degree and May 2023 for my Master's Degree. For Summer 2021, I will be working at Amazon as a software developer intern on their FinTech Team. Alongside my school work and current work, I love building applications from web apps to simple programs and exploring AI and machine learning applications."

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img width = '300px' height = '300px' src={profilepic} alt="Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p style = {{fontSize: '16px'}}>{bio}</p>
            
            {/* <p style = {{fontSize: '16px'}}>I am currently looking for a Summer 2021 Software Development Internship. Please contact me if you would like to get in touch.</p> */}
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p style = {{fontSize: '16px'}} className="address">
						   <span>{name}</span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span><br/>						   
						         <a href = "https://www.linkedin.com/in/george-ye-45g/"><span>My LinkedIn</span></a>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={Pdf} rel="noopener noreferrer" target="_blank" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;

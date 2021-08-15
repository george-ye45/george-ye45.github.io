import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">
            <h2 style = {{textAlign: 'center', color: 'white'}}>Get In Touch</h2>

            <div className="two columns header-col">
            <h1 style = {{textAlign: 'center', color: 'white'}}> </h1>

            </div>



            <div >

                  <p style = {{color: "#CCD6F6"}}className = 'lead'>{message}</p>

            </div>



         </div>

         <div className="row">
            <div style = {{display: 'flex', justifyContent: 'space-evenly'}}>
               <a target="_blank" rel="noopener noreferrer" href = "https://www.linkedin.com/in/george-ye-45g/">LinkedIn</a>
               <a target="_blank" rel="noopener noreferrer" href="mailto:george.ye45@gmail.com">{email}</a>
               <a target="_blank" rel="noopener noreferrer" href="tel:6783651412">{phone}</a>
         </div>
      </div>
   </section>
    );
  }
}

export default Contact;

import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

let resumeData = {
  "main": {
    "name":"George Ye",
    "occupation":"Student",
    "description":"Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer",
    "image":"profilepic.png",
    "bio":"Hello! I am an undergraduate computer science major at the Georgia Institute of Technology with an expected graduation date on May 2022. I have previous internship experience in Full Stack Web App Development and IT Support, and I am currently looking for a summer 2021 internship.",
    "contactmessage":"Thank you for your time! After reviewing my work and qualifications, please do not hesitate to contact me. My email, phone number, and LinkedIn are below.",
    "email": "george.ye45@gatech.edu",
    "phone": "678-365-1412",
    "address":{
      "city":"Roswell",
      "state":"GA",
      "zip": "30075"
    },
    "social":[
      {
        "name":"linkedin",
        "url":"https://www.linkedin.com/in/george-ye-45g/",
        "className":"fa fa-linkedin"
      },
      {
        "name":"github",
        "url":"https://github.com/george-ye45",
        "className":"fa fa-github"
      }
    ]
  },
  "resume":{
    "skillmessage":"\"Any fool can know. The point is to understand.\"",
    "education":[
    ],
    "skills":[
      {
        "name":"Java",
        "level":"90%"
      },
      {
        "name":"Python",
        "level":"90%"
      },
      {
        "name":"NodeJS/JavaScript",
        "level":"90%"
      },
      {
        "name":"React",
        "level":"90%"
      },
      {
        "name":"C",
        "level":"75%"
      },
      {
        "name":"MySQL",
        "level":"75%"
      },
      {
        "name": "MongoDB",
        "level":"75%"
      },
      {
        "name":"HTML5",
        "level":"60%"
      },
      {
        "name":"Git",
        "level":"60%"
      },
      {
        "name":"CSS",
        "level":"45%"
      }
    ]
  },
  "portfolio":{
    "projects": [
      {
        "title":"Code Tracer",
        "category":"Personal Project using MERN Stack and Heroku",
        "image":"Capture.v1.png",
        "url":"https://codetracer.herokuapp.com/",
        "description":"Personal web app project created using MERN Stack and Heroku called Code Tracer. It is an online compiler and coding practice tool for Python, JavaScript/NodeJS, and Java"
      },
      {
        "title":"Scene Recognition with Machine Learning",
        "category":"Analysis of machine learning algorithms on image recognition",
        "image":"ML_Scene.png",
        "url":null,
        "description":"Team project analyzing machine learning algorithms on scene recognition. We performed multiclassification on colored images of different sceneries using the MIT Places database and analyzed accuracy on KNN, Decision Tree, Neural Network and CNN"
      },
      {
        "title":"Automated Algorithm Design",
        "category":"VIP Team: AAD",
        "image":"VIP.png",
        "url":"https://www.vip.gatech.edu/teams/vvk",
        "description":"I am working on a VIP (vertically integrated project) team with the aim to create an automated method that starts with the best human algorithms that develop into hybrid algorithms that outperform existing methods."
      },
    ]
  }
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    //ReactGA.initialize('UA-110570651-1');
    //ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    // $.ajax({
    //   url:'/resumeData.json',
    //   dataType:'json',
    //   cache: false,
    //   success: function(data){
    //     this.setState({resumeData: data});
    //   }.bind(this),
    //   error: function(xhr, status, err){
    //     console.log(err);
    //     alert(err);
    //   }
    // });
    this.setState({resumeData})
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;

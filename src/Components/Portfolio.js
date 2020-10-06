import React, { Component } from 'react';
import pdf from './../ml_scene.pdf'

class Portfolio extends Component {
  render() {

    if(this.props.data){

      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a rel="noopener" target="_blank" href={projects.url || pdf} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
          <p>{projects.description}</p>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1 style = {{color: '#CCD6EA'}}>Check Out Some of My Projects</h1>

            <div id="portfolio-wrapper" style = {{alignContent: 'center'}} className="bgrid-thirds s-bgrid-thirds cf">
                {projects}
            </div>
            <h1>Check out my <a href = "https://github.com/george-ye45">github</a> for the source code!</h1>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;

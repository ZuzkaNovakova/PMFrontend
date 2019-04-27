import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import projectService from "../lib/projects-service";

class AllProjects extends Component {
  constructor(props) {
    super(props);
  
    this.state = { listOfProjects: [] };
  };

  
  
  // componentDidMount() {
  //   // PASS THE ID TO THE LIST SERVICE
  //   projectService.list()
  //     .then(allProjects => {
  //       this.setState({
  //         listOfProjects: allProjects
  //       })
  //     })
  //     .catch()
    
  // }
  
  render() {
    return (
      <div>
        <h1>ALL PROJECTS</h1>
        {/* { this.state.listOfProjects.map((project, index) => {
          return (
            <div key={project._id}>
              <Link to=''>
              <h3>{project.projectName}</h3>
             </Link>
            </div>
          )})
        } */}
      </div>
    )
  }
}


export default withAuth(AllProjects);
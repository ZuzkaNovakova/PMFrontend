import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import projectService from "../lib/projects-service";

class NewProject extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      projectName: "",
      description: "",
      /*projectManagerName: "",
      date: "",
      status: "",
      department: "",
      priority: "",
      linkToDocsStorage: "",*/
    };
  }

 
  // BE CAREFUL WITH THE SENT OBJECT TO THE DATABASE
  handleFormSubmit = (event) => {
    event.preventDefault();
    projectService.create(this.state)
      .then(data => {
        this.props.history.push('/profile');
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
       <h1>Create a new Project</h1>
        <form onSubmit={this.handleFormSubmit}>
         <label>Project Name:</label>
         <input type="text" name="projectName" value={this.state.projectName} onChange={this.handleChange}/>
         <label>Description:</label>
         <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
         {/* <label>Project Manager</label>
         {/* <input type="text" name="projectManagerName" value={this.state.projectManagerName} onChange={this.handleChange}/> */}
         {/* <label>Date:</label> */}
         {/* <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
         <label>Status:</label>
         <input type="text" name="status" value={this.state.status} onChange={this.handleChange}/>
         <label>Department:</label> */}
         {/* <input type="text" name="department" value={this.state.department} onChange={this.handleChange}/>
         <label>Priority</label>
         <input type="text" name="priority" value={this.state.priority} onChange={this.handleChange}/>
         <label>Link to Documents:</label>
         <input type="text" name="linkToDocsStorage" value={this.state.linkToDocsStorage} onChange={this.handleChange}/> */} 
         <input type="submit" value="Submit" />
       </form> 
      </div>
    );
  }
}



 /* 

  handleChange = (event) => {  
      const { name, value } = event.target;
      this.setState({[name]: value})
  }
}*/


export default withAuth(NewProject);
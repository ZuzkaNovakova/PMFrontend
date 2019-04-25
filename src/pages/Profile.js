import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    const { username } = this.props.user;

    return (
      <div>
        <h1>Welcome {username}</h1>
        <Link to={"/profile/projects/new"}><button>Create a Project</button></Link>
        <button>All Projects</button>
        <button>Search your Department Projects</button>
      </div>
    );
  }
}

export default withAuth(Profile);

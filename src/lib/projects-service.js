import axios from "axios";

class Project {
  constructor() {
    this.project = axios.create({
      baseURL: process.env.REACT_APP_MY_APP,
      withCredentials: true
    });
  }


create(projectToCreate) {
  console.log('PROJECT IN SERVICE: ', projectToCreate);
  return this.project
    .post(`/project-routes/new`, projectToCreate)
    .then(({ data }) => data);
  }


list() {
  console.log('list');
  return this.project
    .get('/project-routes/allprojects')
    .then(({data}) => data);
  };
}

const projectService = new Project();

export default projectService;
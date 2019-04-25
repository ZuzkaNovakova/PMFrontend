import axios from "axios";

class Project {
  constructor() {
    this.project = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }

create(projectToCreate, userId) {
  console.log('PROJECT IN SERVICE: ', projectToCreate, userId);
  return this.project
    .post(`/project-routes/new/${userId}`, { projectToCreate })
    .then(({ data }) => data);
  }
}

const projectService = new Project();

export default projectService;
# Project Name
Manage your Project

## Description

The application is intended for managing projects. The first screen shows all the projects of the company. It can be filtered to show the list of the projects assigned to "our" department only. After clicking on a project, you can see the project details such as the project name, project manager´s name, description, to do tasks, assignee, priority, due days for the to do tasks, calendar with the deadlines, status, link to docs storage, list of done.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start using the app
-  **Login:** As a user I can login to the platform so that I can start using the app
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **See list of all projects** As a user I can see the list of all the projects of my company.
-  **See list of projects assigned to a department** As a user I can see the list of the projects assigned to a department.
-  **See project details** As a user I can see a project detail.
-  **Assign task** As a user I can assign a task within a project.
-  **See tasks assigned to me** As a user I can see a list of projects which have tasks assigned to me.
-  **Set a deadline to a task** As a user I can set a deadline to a task.
-  **See my profile** As a user I can see my profile.

## Backlog

- upload my profile picture
- see profiles of other users
- sent a message to a project manager/assignee of a task
- limit permissions (create a project, modify project, set deadlines)
- api to dropbox to be able to upload documents
- search a project


# Client

## Pages

| url | public | Functionality |
|-----|-------|---------------|
| `/` | true | landing page |
| `/signup` | true | Signup user |
| `/login` | true | login user |
| `/profile` | false | profile of user |
| `/projects` | false | list of all projects |
| `/projects/department` | false | our department projects |
| `/projects/department/projectId` | false | particular project |
| (`/projects/department/projectId/update`) | false | project update |


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Project Service
  - project.list()
  - project.search(terms)
  - project.create(data)
  - project.delete(id)
  - project.detail(id)
  - project.update(id)  

# Server

## Models

User model

```
username - String // required
name - String // required
surname - String // required
email - String // required & unique
password - String // required
myToDos - [ObjectID<Project>]

```

Project model

```
projectName - String // required
description - String // required
projectManagerName - ObjectID<User> // required
date - Date
status - String (enum) // required
department - String (enum) // required
priority - String (enum)
linkToDocsStorage - String (link)

```

ToDoTasks model

```
task - String // required
assignee - ObjectID<User> 
status - String (enum) // required
deadline - Date
priority - String (enum)

```

## API Endpoints (backend routes)

## API routes:

### auth
|Method|Route|Functionality|
|---|---|---|
|GET|api/auth/me|Check session status|
|POST|api/auth/signup|Log in user to app and set user to session (Body: username, password)|
|POST|api/auth/login|Register user to app and set user to session (Body: username, password)|
|POST|api/auth/logout|Log out user from app and remove session|
|GET|api/:userId/projects/Show all projects|
|GET|api/:userId/projects/deptName |Show dept projects|
|GET|api/:userId/projects/:id|Show project detail|
|PUT|api/:userId/projects/:id/update |Update a project|
|GET|api/profile |Show profile|
|POST|api/:userId/projects/:id/delete |Delete a project|
|POST|api/:userId/projects/create |Create a project|

  

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/SqjRuOQE/manage-your-project) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/ZuzkaNovakova/PMFrontend)

[Server repository Link](https://github.com/ZuzkaNovakova/PMBackend)

[Deploy Link Backend](http://heroku.com)

[Deploy Link Frontend]()

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)

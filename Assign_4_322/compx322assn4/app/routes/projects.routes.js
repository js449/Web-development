module.exports = app => {
  const projects  = require("../controllers/projects.controller");

  /**
   * Routes setup for all the requests
   */
  
  //get request to get all the available projects in database
app.get("/availPjt", projects.getProjectList);

//post method to create a project and save it to the database
app.post("/createPjt", projects.create);

//get request to get a project by id
app.get('/projectByID/:projectID', projects.getProjectByID);

//get request to get a project by name
app.get('/projectByName/:projectName', projects.getProjectByName);

//put req to update project by id
app.put('/updateByID/:projectID', projects.updateByID);

//delete request to delete a project by id
app.delete('/deleteByID/:projectID', projects.deleteByID);

//get request to delete all projects from database
app.delete('/deleteAll', projects.deleteAll);

}


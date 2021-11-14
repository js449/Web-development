//database connection
const db = require("./db");


//Constructor for the attributes of projects database

const Project = function(project){
    this.id = project.id;
    this.projectname = project.projectname;
    this.projectdesc = project.projectdesc;
    this.startdate = project.startdate; 
    this.enddate = project.enddate;

};
// *******************************************************Retrieve all projects from database**************************************************

/**
 * functional query to retrieve data from the projects table with parameters errors and respose
 * if error occurs while querying data then display error message on console otherwise
 * display the response on console
 * @param {*} result return the available projects in the projets database
 */

Project.getAll = result => {
    db.query("select * from projects", (err, res) => {
        if(err){
            console.log("error: ", res);
            result(null, err);
            return;
        }
        console.log("Available projects retrieved successfully!" , res);
        result(null, res);
    });
};

// *******************************************************retrieve projects by id**************************************************

/**
 * functional query to retrieve data from the projects table with given id 
 * if error occurs while querying data then display error message on console otherwise
 * display the response on console
 * @param {*} projectID returns the id associated to the project id
 * @param {*} result returns the information of the specific project associated to the id.
 */

Project.getProjectByID = (projectID, result) =>{ 
    db.query(`select * from projects where id=${projectID}`, (err,res)=>{
        if(err){
            console.log('error: ' + err);
            result(null,err);
            return;
        }
        else{
            console.log(`Project with id ${projectID} Found!` , res);
            result(null, res);
        }
    });
};

// *******************************************************retrieve project by name**************************************************

/**
 * functional query to retrieve data from the projects table with given project name 
 * if error occurs while querying data then display error message on console otherwise
 * display the response on console
 * @param {*} projectName returns the projecname associated to the project name in database
 * @param {*} result returns the information of the specific project associated to the projectname.
 */

Project.getProjectByName = (projectName, result) =>{
    db.query(`select * from projects where projects.projectname='${projectName}'`,(err,res)=>{
        if(err){
            console.log('error: ' + err);
            result(null,err);
            return;
        }
        else{
            console.log(`Project with name ${projectName} Found!` , res);
            result(null, res);
        }
    });
};

// *******************************************************creating new project**************************************************

/**
 * functional query to insert new projectdata into the projects database
 * if error occurs while querying data then display error message on console otherwise
 * display the response on console
 * @param {*} newProject returns the newly added information of a new project
 * @param {*} result returns the information of the newly added project associated to the project.
 */

Project.create = (newProject, result) => {
    db.query("insert into projects SET?", newProject, (err, res) =>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created project: ", {id: res.insertID, ...newProject});
        result(null, {id: res.insertID, ...newProject});
    });
};

// *******************************************************delete project by id**************************************************

/**
 * functional query to delete a project from the projects database with given id
 * if error occurs while querying data then display error message on console otherwise
 * display the response on console
 * @param {*} projectID return the information related to the project that we want to deleted
 * @param {*} result returns the information of the specific project which has been deleted with given projectID.
 */

Project.deleteByID = (projectID, result) =>{ 
    db.query(`DELETE from projects where id=${projectID}`, (err,res)=>{
        if(err){
            console.log('error: ' + err);
            result(null, err);
            return;
        }
        else{
            console.log(`Project having id: ${projectID} deletion update given below:`, res);
            result(null, res);  
        }  
    });
};
// *******************************************************delete all projects**************************************************

/**
 * functional query to delete all the projects from the projects database
 * if error occurs while querying data then display error message on console otherwise
 * display the response on console 
 * @param {*} result returns the information of the deleted projects
 */

Project.deleteAll = result =>{
    db.query(`DELETE from projects`, (err,res)=>{
        if(err){
            console.log('error: ' + err);
            result(null,err);
            return;
        }
        else{
            console.log('All projects deletion update given below:', res);
            result(null, res);
        } 
    });  
};

// *******************************************************Updating project by id**************************************************

/**
 * functional query to update a project with id from the projects database
 * if error occurs while querying data then display error message on console otherwise
 * display the response on console 
 * @param {*} projectID returns the information of the project that we want to update.
 * @param {*} projectdata returns updated project data
 * @param {*} result returns the information of updated projec.
 */

Project.updateByID = (projectID,projectdata,result) =>{
    db.query(`UPDATE projects SET projects.id = ${projectdata.id},
    projects.projectname = '${projectdata.projectname}',
     projects.projectdesc = '${projectdata.projectdesc}',
     projects.startdate = '${projectdata.startdate}',
     projects.enddate = '${projectdata.enddate}'
     WHERE projects.id =  ${projectID}`, (err,res)=>{
        if(err){
            console.log('error: ' + err);
            result(null,err);
            return;
        }
        else{
            console.log(`Project id: ${projectID} update information given below:`, res);
            result(null, res);
        }
    });
};

module.exports = Project;
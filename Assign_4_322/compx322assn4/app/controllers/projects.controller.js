const Project = require("../models/projects.model");

// **********************************************Get All Projects*******************************************************************

/**
 * export module for request authenticated to get all projects
 * Calling getAll method from the model.js file with error and data parameters which send the status code 500 if
 * any error occur else it will send the data back as response
 */

exports.getProjectList = (req, res) => {
    Project.getAll((err, data) => {
        if(err)
        res.status(500).send({
            message:
            err.message || "some error occured while retrieving projects"
        });
        else res.send(data);
    });
};

// **********************************************Create Projects*******************************************************************

/**
 * export module for request authenticated to create new projects
 * parameters request and response, module send the status code 400 as a response if the requested  data is null
 * Calling create method from the model.js file with project, error & data parameters which send the status code 500 if
 * any error occur else it will send the data back as response
 * project parameter, a new Project object return all the written attributes to create data and send back as response.
 */

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "content cannot be empty!"
        });
    }
//mapping request
const project = new Project({
    id: req.body.id,
    projectname: req.body.projectname,
    projectdesc: req.body.projectdesc,
    startdate: req.body.startdate,
    enddate: req.body.enddate
});

//saving request in database
Project.create(project, (err, data) => {
    if(err)
    res.status(500).send({
      message:
        err.message || "Some error occured while creating the project"
    });
    else res.send(data);
});
};

// **********************************************Get projects by id*******************************************************************

/**
 * export module for request authenticated to get a project information from database with the help of project id.
 * parameters request and response, module send the status code 400 as a response if the requested  data is null
 * Calling getProjectByID method from the model.js file with projectID, error & data parameters which send the status code 500 if
 * any error occur else it will check the data length if its greater than 0 send the data back as response otherwise
 * return a valid error message
 * projectID parameter, returns project id associated to data and send back as response.
 */

exports.getProjectByID = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message: 'Contents can not be empty.'
        });
    }
//saving request 
    Project.getProjectByID(req.params.projectID, (err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || 'Same error occured while retriving the projects.'
            });
        }
        else{
            if(data.length > 0){ 
                res.send(data);
            }
            else{
                res.send(`A project does not exist with the id: ${req.params.projectID}`)
            }
        }
    });
};

// **********************************************Get Projects by Name*******************************************************************

/**
 * export module for request authenticated to get a project information from database with project Name.
 * parameters request and response, module send the status code 400 as a response if the requested  data is null
 * Calling getProjectByName method from the model.js file with projectName, error & data parameters which send the status code 500 if
 * any error occur else it will check the data length if its greater than 0 send the data back as response otherwise
 * return a valid error message
 * projectName parameter, returns project name associated to data and send back as response.
 */

exports.getProjectByName = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message: 'Contents can not be empty.'
        });
    }
//saving request 
    Project.getProjectByName(req.params.projectName, (err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || 'Same error occured while retriving the projects.'
            });
        }
        else{
            if(data.length > 0){ 
                res.send(data);
            }
            else{
                res.send(`A project does not exist with the name: ${req.params.projectName}`)
            }
        }
    });
};

// **********************************************Delete project by id*******************************************************************

/**
 * export module for request authenticated to delete a project from database.
 * parameters request and response, module send the status code 400 as a response if the requested  data is null
 * Calling deleteByID method from the model.js file with projectID, error & data parameters which send the status code 500 if
 * any error occur else send the data back as response.
 * projectID parameter, returns project id associated to data and send back as response.
 */

exports.deleteByID = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message: 'Contents can not be empty.'
        });  
    }
//saving request 
    Project.deleteByID(req.params.projectID, (err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || 'Same error occured while deleting the project.'
            });
        }
        else res.send(data);
    });
};

// **********************************************Delete All Projects*******************************************************************

/**
 * export module for request authenticated to delete all projects from database.
 * parameters request and response, module send the status code 400 as a response if the requested  data is null
 * Calling deleteAll method from the model.js file with error & data parameters which send the status code 500 if
 * any error occur else send the data back as response.
 */

exports.deleteAll = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message: 'Contents can not be empty.'
        });
    }
//saving request 
    Project.deleteAll((err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || 'Same error occured while deleting all projects.'
            });
        }
        else res.send(data);       
    });
};

// **********************************************Update project by id*******************************************************************

/**
 * export module for request authenticated to update a project from database with project ID.
 * parameters request and response, module send the status code 400 as a response if the requested  data is null
 * Calling updateByID method from the model.js file with projectID,projectdata, error & data parameters which send
 * the status code 500 if any error occur else send the data back as response.
 * projectID parameter, returns project id associated to old data & projectdata return the
 * updated data and send back as response.
 */

exports.updateByID = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "content cannot be empty!"
        });
    }
//mapping request
const projectdata = new Project({
    id: req.body.id,
    projectname: req.body.projectname,
    projectdesc: req.body.projectdesc,
    startdate: req.body.startdate,
    enddate: req.body.enddate
});

//saving request in database
Project.updateByID(req.params.projectID, projectdata, (err, data) => {
    if(err)
    res.status(500).send({
      message:
        err.message || "Some error occured while updating the project"
    });
    else res.send(data);
});
};


// **********************************************End*******************************************************************
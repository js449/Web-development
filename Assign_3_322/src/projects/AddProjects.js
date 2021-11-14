import React, { Component } from 'react';
import { FcFolder } from 'react-icons/fc';
import '../css/App.css';

class AddProject extends Component {
     constructor(){
         super();
         this.state = { 
             //variables to add elements of project
            projectName: '',
            projectIdentifier: '',
            description: '',
            start_date: '',
            StartTime: '',
            end_date: '',
            EndTime: ''
         };

   //binding elements
     this.handleChange = this.handleChange.bind(this);
     this.handleAdd = this.handleAdd.bind(this); 
       }

//function to add new projects into the front end list
handleAdd(e){
    e.preventDefault();
    let tempPjt = {
        projectName: this.state.projectName,
        projectIdentifier: this.state.projectIdentifier,
        description: this.state.description,
        start_date: this.state.start_date + ' ' + this.state.StartTime,
        end_date: this.state.end_date + ' ' + this.state.EndTime
    };
    this.props.AddProjects(tempPjt);
    this.setState({
        projectName: '',
        projectIdentifier: '',
        description: '',
        start_date: '',
        StartTime: '',
        end_date: '',
        EndTime: ''
    });
    this.props.toggleForm();
}


//function to get and set values
handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
        [name]: value
    });
}

    render(){
  //HTML for creating new project including bootstrap, forms using props.
        return(
            <div className = {'card textcenter mt-3 ' + (this.props.formDisplay ? '' : 'add-project')}>
            <div className = "heading" 
                onClick= {this.props.toggleForm}>
                    <FcFolder /> Add New Project
                </div>
                <br></br>
                <div className="card-body">
                    <form id = "pjtForm" noValidate
                    onSubmit = {this.handleAdd}>
                        <div className="form-group project-name">
                            <label className = "col-md-1 col-form-label text-md-right"
                            htmlFor="projectName"
                            readOnly>Project Name: </label>
                            <div className = "col-md-1">
                            <textarea className = "form-control"
                                rows="1"
                                cols="40"
                                name = "projectName"
                                placeholder = "Project's Name"
                                value = {this.state.projectName}
                                onChange = {this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group project-id">
                            <label className = "col-md-8 col-form-label text-md-right"
                            htmlFor= "projectIdentifier"
                            readOnly>Project ID: </label>
                            <div className = "col-md-8">
                            <textarea className = "form-control"
                                rows="1"
                                cols="40"
                                name = "projectIdentifier"
                                placeholder = "Project's ID"
                                value = {this.state.projectIdentifier}
                                onChange = {this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group description">
                            <label className = "col-md-2 col-form-label text-md-right"
                            htmlFor="description"
                            readOnly>Project Description: </label>
                            <div className = "col-md-2">
                                <textarea className = "form-control"
                                rows="4"
                                cols="40"
                                name = "description"
                                placeholder = "Project's Description"
                                value = {this.state.description}
                                onChange = {this.handleChange}/>
                        </div>
                        </div>
                        <div className="form-group start-date">
                            <label className = "col-md-3 col-form-label text-md-right"
                            htmlFor="start_date"
                            readOnly>Start Date: </label>
                            <div className = "col-md-3">
                                <input type = "date"
                                className = "form-control"
                                name = "start_date"
                                id = "StartDate"
                                value = {this.state.start_date}
                                onChange = {this.handleChange}/>
                        </div>
                        </div>
                        <div className="form-group start-time">
                            <label className = "col-md-4 col-form-label text-md-right"
                            htmlFor="StartTime"
                            readOnly>Start Time: </label>
                            <div className = "col-md-4">
                                <input type = "time"
                                className = "form-control"
                                name = "StartTime"
                                id = "StartTime"
                                value = {this.state.StartTime}
                                onChange = {this.handleChange}/>
                        </div>
                        </div>
                        <div className="form-group end-date">
                            <label className = "col-md-5 col-form-label text-md-right"
                            htmlFor="end_date"
                            readOnly>End Date: </label>
                            <div className = "col-md-5">
                                <input type = "date"
                                className = "form-control"
                                name = "end_date"
                                id = "EndDate"
                                value = {this.state.end_date}
                                onChange = {this.handleChange}/>
                        </div>
                        </div>
                        <div className="form-group end-time">
                            <label className = "col-md-6 col-form-label text-md-right"
                            htmlFor="EndTime"
                            readOnly>End Time: </label>
                            <div className = "col-md-6">
                                <input type = "time"
                                className = "form-control"
                                name = "EndTime"
                                id = "EndTime"
                                value = {this.state.EndTime}
                                onChange = {this.handleChange}/>
                        </div>
                        </div>
                        {/* button to add the new entry of project into the list*/}
                        <button className = "button" onClick = {() => this.onSubmit}>Submit!</button>
                    </form>
                </div>
            </div>    
        )     
    }
}
export default AddProject;

import React, { Component } from 'react';
import { FcFullTrash } from 'react-icons/fc';
import { FiArrowDownCircle } from 'react-icons/fi';
import Moment from 'react-moment';
import '../css/App.css';

class ListProjects extends Component {
    render(){
//bootstrap      
        return(
//html and codes to display the projects 
        <div className="projects-list item-list mb-3">  
            <div className = "heading" 
                onClick= {this.props.toggleForm}
                >
                < FiArrowDownCircle /> Available Project
                </div>
                <br></br>
            {this.props.projects.map(project =>(
                <div className = "project-identifier col media py-3" key = {project.projectIdentifier}>
                    <div className = "mr-3">
                        <div className = "del-project btn btn-sm btn-danger" onClick = {() => this.props.deleteproject(project)}
                        ><FcFullTrash/>
                            <span className = "project-name">Project Name: {project.projectName}</span>
                           </div>
                           </div>
                            <div className = "dates">
                            <span className = "start-date ml-auto"> 
                            Start Date: <Moment
                                 date= {project.start_date}
                                 parse = "YYYY-MM-dd hh:mm"
                                 format = "MMM-D  h:mma"/> 
                                </span>
                                <br></br>
                            <span className = "end-date ul-auto"> 
                            End Date: <Moment
                                date= {project.end_date}
                                parse = "YYYY-MM-dd hh:mm"
                                format = "MMM-D h:mma"/> 
                                </span>
                            </div>
                    <br></br> 
                    </div>       
            ))}
       </div>
        )  
    }
}
export default ListProjects;


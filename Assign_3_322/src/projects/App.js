 import React, { Component } from 'react';
import '../css/App.css';
import ListProjects from './AvailProjects';
import AddProject from './AddProjects';
import { without} from 'lodash';
import { FiArrowDownCircle } from 'react-icons/fi';


class App extends Component{

  constructor(){
    super();
    this.state = {
      // variables
      avalProjects: [],
      formDisplay: false,
      isOldestFirst: true,
      lastIndex: 0  
    };
    //binding elements to this.
    this.delProject = this.delProject.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.AddProjects = this.AddProjects.bind(this);
    this.toggleListReverse = this.toggleListReverse.bind(this);
    this.sortDateAsc = this.sortDateAsc.bind(this);
    this.sortDateDesc = this.sortDateDesc.bind(this);
    this.sortNameAsc = this.sortNameAsc.bind(this);
    this.sortNameDesc = this.sortNameDesc.bind(this);
  }

  //toggling  form elements(hide & display)
    toggleForm(){
      this.setState({
          formDisplay: !this.state.formDisplay
      });
    }

    //function to delete a project
    delProject(pjct){
      let tempProject = this.state.avalProjects;
      tempProject = without(tempProject, pjct);
      this.setState({
      avalProjects: tempProject
      });
    }

    //function to Sort projects in reversing order.
    toggleListReverse (event) {
      event.preventDefault();
      const {avalProjects} = this.state
      let newPList = avalProjects.reverse()
      this.setState({
        avalProjects: newPList
      })
    }
 
    //count projects
  componentDidMount(){
    fetch('./data.json')
    .then(response => response.json())
    .then(result => {
    const prjts = result.map(project => {
        project.projectIdentifier = this.state.lastIndex;
        this.setState({lastIndex: this.state.lastIndex +1});
        return project;
    });
    this.setState({
        avalProjects: prjts
    });
    });
}

//function to Add a project to the list
AddProjects(pjct){
  let tempPjcts = this.state.avalProjects;
  pjct.projectIdentifier = this.state.lastIndex;
  tempPjcts.unshift(pjct);
  this.setState({
      avalProjects: tempPjcts,
      lastIndex: this.state.lastIndex +1
  });
}

//function to display projects based on project names in Ascending order.
sortNameAsc(){
  let tmp = this.state.avalProjects;
  tmp.sort((a, b) =>{
    if(a.projectName>b.projectName)
    {
      return 1;
    }
    return -1;
  });
  this.setState({
    avalProjects: tmp
  });
}

//function to display projects based on project names in descending order.
sortNameDesc(){
  let tmp = this.state.avalProjects;
  tmp.sort((a, b) =>{
    if(a.projectName < b.projectName)
    {
      return 1;
    }
    return -1;
  });
  this.setState({
    avalProjects: tmp
  });
}

//function to display projects based on dates in Ascending order.
sortDateAsc(){
  let tmp = this.state.avalProjects;
  tmp.sort((a, b) =>{
    if(a.start_date>b.start_date)
    {
      return 1;
    }
    return -1;
  });
  this.setState({
    avalProjects: tmp
  });
}

//function to display projects based on dates in descending order.
sortDateDesc(){
  let tmp = this.state.avalProjects;
  tmp.sort((a, b) =>{
    if(a.start_date < b.start_date)
    {
      return 1;
    }
    return -1;
  });
  this.setState({
    avalProjects: tmp
  });
}

render(){
  return(
   //HTML, div elements and classes to display the content of .js classes on browser,  displaying available projects including delete button,
  // buttons to sort data, adding projects to the front end including toggling form elements.
      <main className="mainApp" id = "petratings">
        <div className = "container">
          <div className = "row"></div>
          <div className = "col-md-12 bg-white">
        <header className="list-container">
          <ListProjects projects = {this.state.avalProjects}
          deleteproject = {this.delProject}/>
          <AddProject formDisplay = {this.state.formDisplay}
          toggleForm = {this.toggleForm}
          AddProjects = {this.AddProjects}/>
          {/* buttons to sort data by name and start dates (ascending and descending orders) */}
          <div className = "sortButton">
          <div className = "heading" 
                onClick= {this.props.toggleForm}>
                    <FiArrowDownCircle /> Sorting Projects
                </div><br></br>
              <button className="button" onClick={this.toggleListReverse}>Order By ProjectName(Reverse)</button>
              <br></br><br></br> 
              <button className="button" onClick={this.sortNameAsc}>Order By ProjectName(Asc)</button>
              <br></br><br></br>  
              <button className="button" onClick={this.sortNameDesc}>Order By ProjectName(Desc)</button>
              <br></br><br></br>  
              <button className="button" onClick={ this.sortDateAsc}>Order By StartDate(Asc)</button>
              <br></br><br></br>  
              <button className="button" onClick={this.sortDateDesc}>Order By StartDate(Desc)</button>    
        </div>
        </header>
      </div>
      </div>
          </main>
    );
  }
}
export default App;

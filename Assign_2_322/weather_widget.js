/*
 * Constructor function for a WeatherWidget instance.
 *
 * container_element : a DOM element inside which the widget will place its UI
 * add to/edit the skeleton code as required, I recommend you follow the defined structure
 * to ensure you meet the requirements for object literals and constructor functions
 *
 */
 var divforAll = document.createElement("div");
 divforAll.setAttribute("class", "divforAll");//The attributes and the attributes value
 divforAll.style.backgroundColor = "Yellow";
 divforAll.style.marginLeft = "25%";
 divforAll.style.marginRight = "25%";
 divforAll.style.paddingTop = "5px";
 divforAll.style.paddingBottom = "20px";

 //Div for topbar
 var divtopBar = document.createElement("div");
 divtopBar.setAttribute("class", "divtopBar");
 divtopBar.style.backgroundColor = "olive";
 divtopBar.style.margin = "3% 10% 0% 10%";
 divtopBar.style.padding = "10px 5px 10px 25px";
 divtopBar.innerHTML = "Select Town List: ";
 divtopBar.style.fontSize = "large";


requestselect = new XMLHttpRequest();

function WeatherWidget(container_element){
    //let townname = "";

  	//declare the data properties of the object

  	//declare an inner object literal to represent the widget's UI

    //write a function to create and configure the DOM elements for the UI
    //this will be explicitly called when the object is created to make it visible
    var _createUI = function(container_element){

      //create each of the DOM elements (dropdown list, divs, spans, etc)



      //Select Part
      var select = document.createElement("select");
      select.setAttribute("class", "select");
      select.style.marginLeft = "25px";
      select.style.fontSize = "large";

      var option0 = document.createElement("option");
      option0.setAttribute("id", "Hamilton");
      //option.setAttribute("text", "Hamilton");
      option0.innerHTML = "Hamilton";
      select.appendChild(option0);

      var option1 = document.createElement("option");
      option1.setAttribute("id", "Tauranga")
      option1.innerHTML = "Tauranga";
      select.appendChild(option1);

      var option2 = document.createElement("option");
      option2.setAttribute("id", "Dunedin")
      option2.innerHTML = "Dunedin";
      select.appendChild(option2);

      var option3 = document.createElement("option");
      option3.setAttribute("id", "Auckland")
      option3.innerHTML = "Auckland";
      select.appendChild(option3);

      var option4 = document.createElement("option");
      option4.setAttribute("id", "Christchurch")
      option4.innerHTML = "Christchurch";
      select.appendChild(option4);

      var option5 = document.createElement("option");
      option5.setAttribute("id", "Wellington")
      option5.innerHTML = "Wellington";
      select.appendChild(option5);

      var option6 = document.createElement("option");
      option6.setAttribute("id", "Invercargill")
      option6.innerHTML = "Invercargill";
      select.appendChild(option6);

      var span = document.createElement("span");
      span.appendChild(select)//Attach select to the span
      divtopBar.appendChild(span);


      //To add the option to the select
      container_element.appendChild(divforAll);

      //Is to Create a  function with onchange
      select.onchange = function(){
        let options = select.options;
        let selectID = options[options.selectedIndex].id;
      };

        //these will need to be added the container_element which is the div passed in
        //as a parameter to the constructor function by the html page
    }

	   //add any other methods required for the functionality to get weather data using AJAX
    // your callback function should create an instance of the WeatherLine object to store and
    //display the information returned
    //Display Data By Category functions


    //you will need to define comparator functions to be used with your sort for radio buttons




	/*********************************************************
	* Constructor Function for the inner WeatherLine object to hold the
	* full weather data for a town
	********************************************************/

	var WeatherLine = function(){  //add any relevant parameters

		//declare the data properties for the object and its UI
    var radioButton = document.createElement("checked");
    radioButton.setAttribute("value","true");
    //divformidBar.appendChild(radioButton);
    //Div for bottombar

		//declare an inner object literal to represent the widget's UI
        //write a function to create and configure the DOM elements for the UI

		//write a function to create and configure the DOM elements for the UI
        var _createUI = function(divforAll){

        }

		//Add any remaining functions you need for the object, like setters and getters
        //You will need a getter function for the DOM element containing all of the ui
        //elements you create in _createUI so that the outer widget can add it to its
        //own ui

		//_createUI() method is called when the object is instantiated
		_createUI();
  	};  //this is the end of the constructor function for the WeatherLine object



	//  _initialise method is called when a WeatherWidget object is instantiated
	 _createUI(container_element);
   //Attach to Main div
   divforAll.appendChild(divtopBar);
}

//end of constructor function for WeatherWidget

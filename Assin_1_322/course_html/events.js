request = new XMLHttpRequest();
requestTwo = new XMLHttpRequest();
requestThree = new XMLHttpRequest();
requestFour = new XMLHttpRequest();
requestFive = new XMLHttpRequest();
requestSix = new XMLHttpRequest();
requestSix = new XMLHttpRequest();
requestSeven = new XMLHttpRequest();
requestEight = new XMLHttpRequest();

function getEventNames() {
    url = "events.php";
    request.onreadystatechange = displayNames;
    request.open("GET", url, true);
    // request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    request.send("");
}

function displayNames() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            var response = request.responseText;
            theDivElement = document.getElementById("show");
            theDivElement.innerHTML = response;
            if (theDivElement.style.display === "none") {
                theDivElement.style.display = "block";
            } else {
                theDivElement.style.display = "none";
            }
        } else {
            alert("Error: " + imageRequest.statusText);
        }
    }
}


function display(id) {
    //set the url to the server-side javascript
    url = "clickEvent.php";
    data = "getValue=" + id;
    //initialise the XHR object
    requestThree.onreadystatechange = getData;
    requestThree.open("POST", url, true);
    requestThree.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    requestThree.send(data);

}

//function show(id){
function getData() {
    if (requestThree.readyState == 4) {
        if (requestThree.status == 200) {
            var response = requestThree.responseText;
            theDivElement = document.getElementById("show");
            theDivElement.innerHTML = response;

        } else {
            alert("Error: " + imageRequest.statusText);
        }
    }
}


//Display Data By Category functions
function getCatNames() {
    data = document.getElementById("selectCat").value;
    //set the url to the server-side javascript
    url = "updateCat.php";
    data = "category=" + data;

    //initialise the XHR object
    requestTwo.onreadystatechange = displayCat;
    requestTwo.open("POST", url, true);
    requestTwo.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    requestTwo.send(data);
}

function displayCat() {

    if (requestTwo.readyState == 4) {
        if (requestTwo.status == 200) {
            var response = requestTwo.responseText;
            //put the returned data into the <div> element
            theDivElement = document.getElementById("showCat");
            theDivElement.innerHTML = response;

        } else {
            alert("Error: " + imageRequest.statusText);
        }
    }
}




//send tag
function updateTagData(id) {

    //set the url to the server-side javascript
    url = "sendDataTag.php";
    data = "id= " + id;


    //initialise the XHR object
    requestFive.onreadystatechange = updateTag;
    requestFive.open("POST", url, true);
    requestFive.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    requestFive.send(data);
}

function updateTag() {

    if (requestFive.readyState == 4) {
        if (requestFive.status == 200) {
            var response = requestFive.responseText;
            //put the returned data into the <div> element
            theDivElement = document.getElementById("show");
            theDivElement.innerHTML = response;


        } else {
            alert("Error: " + imageRequest.statusText);
        }
    }
}



//get tag
function getTag() {
    document.getElementById("show").innerHTML = "";
    //set the url to the server-side javascript
    url = "getDataTag.php";


    //initialise the XHR object
    requestFour.onreadystatechange = displayTag;
    requestFour.open("POST", url, true);
    requestFour.send("");
}

function displayTag() {

    if (requestFour.readyState == 4) {
        if (requestFour.status == 200) {
            var response = requestFour.responseText;
            //put the returned data into the <div> element
            theDivElement = document.getElementById("show");
            theDivElement.innerHTML = response;


        } else {
            alert("Error: " + imageRequest.statusText);
        }
    }
}

//add tag
function addTag(id) {
    //set the url to the server-side javascript
    url = "addTag.php";
    data = "id=" + id;


    //initialise the XHR object
    requestSix.onreadystatechange = UpdateTag;
    requestSix.open("POST", url, true);
    requestSix.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    requestSix.send(data);
}

function UpdateTag() {

    if (requestSix.readyState == 4) {
        if (requestSix.status == 200) {
            var response = requestSix.responseText;
            //put the returned data into the <div> element
            theDivElement = document.getElementById("show");
            theDivElement.innerHTML = response;


        } else {
            alert("Error: " + imageRequest.statusText);
        }
    }
}

function getMyList() {
    url = "myList.php";
    request.onreadystatechange = displayList;
    request.open("GET", url, true);
    // request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    request.send("");
}

function displayList() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            var response = request.responseText;
            theDivElement = document.getElementById("show");
            theDivElement.innerHTML = response;
            
        } else {
            alert("Error: " + imageRequest.statusText);
        }
    }
}


//remove tag
function removeTag(id) {
    //set the url to the server-side javascript
    url = "removeTag.php";
    data = "id=" + id;


    //initialise the XHR object
    requestSix.onreadystatechange = UpdateTagData;
    requestSix.open("POST", url, true);
    requestSix.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    requestSix.send(data);
}

function UpdateTagData() {

    if (requestSix.readyState == 4) {
        if (requestSix.status == 200) {
            var response = requestSix.responseText;
            //put the returned data into the <div> element
            theDivElement = document.getElementById("show");
            theDivElement.innerHTML = response;


        } else {
            alert("Error: " + imageRequest.statusText);
        }
    }
}
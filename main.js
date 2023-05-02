console.log("main.js works") // Test used to make sure the html file is connected to the json file 
fetch("http://localhost:3000/cats")
.then(response=>response.json())
.then(json => console.log(json))
console.log("main.js works") // Test used to make sure the html file is connected to the json file 
fetch("http://localhost:3000/cats")
.then(response=>response.json())
.then(cats => cats.forEach(cat => renderCat(cat)))


function renderCat(cat){
  // Make an img 
  const image = document.createElement("img");
  image.src = cat.Image
const ul = document.getElementById("catList")
console.log(ul)
ul.appendChild(image)
}


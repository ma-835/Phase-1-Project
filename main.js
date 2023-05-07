// document.addEventListener("DOMContentLoaded", function() {}
//console.log("main.js works") // Test used to make sure the html file is connected to the json file 


fetch(`http://localhost:3000/cats`)
.then(response=>response.json())
.then(cats => cats.forEach(cat => renderCat(cat)))

// get request , requests data from server 
//GET PHASE will show the current cats and that is already achieved by fetch method and renderCatfunction 
// We need to render the text at this point 
function renderCat(cat) { 
  const container = document.querySelector('.container');
  const catObject= document.createElement('div')
  const catName = document.createElement("h2") // catName first attribute 
  catName.textContent=cat.Name
  console.log(catName)
  catObject.classList.add("catName")// add catName to main catObject 
  const question = document.createElement("figcaption")  
  // catQuestion is the second attribute 
  question.textContent = cat.Question
  console.log(question)
  catObject.classList.add("question")// add catQuestion to main catObject 
  const catImage = document.createElement("img") // catImages is the third attribute 
  catImage.src = cat.Image 
  console.log(catImage)
  catObject.classList.add("catImage")
 // add catImage to main catObject 
  catObject.appendChild(catName)
  catObject.appendChild(question)
  catObject.appendChild(catImage)
  container.append(catObject)
  }
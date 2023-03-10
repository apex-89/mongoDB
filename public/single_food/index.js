console.log("js running");

// get the id from the URL
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let id = params.idInQuery; 
  let type = params.typeInQuery;
  console.log(id);

  let container = document.getElementById("produce-container")
  let imgContain = document.getElementById("img-container")
// use that ID to get info from collection
const getSingleFruit = async () => {
    let response = await fetch(`http://localhost:5000/fruit/${id}`);

    let finalData = await response.json();

    console.log(finalData);
    console.log({finalData})
    // use this finalData to make some tags, etc.
    let imgTag = document.createElement("img")
    let pTag = document.createElement("p");
    pTag.textContent = finalData.name;
    imgTag.src = finalData.img;
    imgTag.style = "width:250px;height:250px";
    imgContain.appendChild(imgTag);     
    container.appendChild(pTag);
    if (finalData.readyToEat !== true) {
      pTag.style.color = "red"
    } else {
      pTag.style.color = "green"
    }
}


const getSingleVeggie = async () => {
  let response = await fetch(`http://localhost:5000/veggie/${id}`);
  console.log(response)
  let finalData = await response.json();
  console.log({finalData})
  // use this finalData to make some tags, etc.
  // if not ready to eat- red text
  let imgTag = document.createElement("img")
  let pTag = document.createElement("p");
  pTag.textContent = finalData.name;
  imgTag.src = finalData.img;
  imgTag.style = "width:250px;height:250px";
  imgContain.appendChild(imgTag);     
  container.appendChild(pTag);
  if (finalData.readyToEat !== true) {
    pTag.style.color = "red"
  } else {
    pTag.style.color = "green"
  }
  // let veggName = document.getElementById('produce')
  // veggName.textContent = [finalData.name, finalData.color, finalData.age]
}
if (type === "fruit") {
getSingleFruit()
}
if (type === "veggie") {
  getSingleVeggie()
}
 


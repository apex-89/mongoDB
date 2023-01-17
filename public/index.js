console.log("js file connected");


let submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', async () => {
    // send a request to Express 
    // result is the response from the server

    // let nameElement = document.getElementById('name-input')
    // let nameString = nameElement.value
    // can be rewriten as one line 

    let nameString = document.getElementById('name-input').value;
    let colorString = document.getElementById('color-input').value;
    let ageNumber = +document.getElementById('age-input').value;
    let readyBool = document.getElementById('ready-bool').value == "true" ? true:false;

    
    
    const fruit = {
        nameString,
        colorString,
        ageNumber,
        readyBool
    }

    fetch('http://localhost:5000/create_fruit', {
        mode: 'no-cors',
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(fruit)
    
    })

})

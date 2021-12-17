//API TASK-01
//Declaring all the variable 
const head = document.querySelector(".header");
const displayResults = document.querySelector(".displayResults");
const button= document.querySelector("#btn");
button.addEventListener("click",function() {
//Fetching the details from the given API URL
const ApiURL = "http://hp-api.herokuapp.com/api/characters";
    function renderResult(result) {
    const resultDiv = document.createElement("div");
    resultDiv.className = "card";
    resultDiv.innerHTML = `
        <img src="${result.image}"></img>
        <p><b>Name:</b>${result.name}</p>
        <p><b>House:</b>${result.house}</p>
        <p><b>Actor:</b>${result.actor}</p>
        `;
    displayResults.appendChild(resultDiv);
    }
//Providing conditions to display only 20 results
    function renderAll(results) {
    displayResults.innerHTML = "";
    document.querySelector('#result').hidden=false;
    let count=0
    for(let result of results){ 
            renderResult(result);
            count++;
            if(count==20)break;
    }
}
//Using async/await to get the results
    let func = async function(ApiURL){
        try{
        const response = await fetch(ApiURL);
        let results = await response.json();
        console.log(results)
        renderAll(results);
        }
        catch(error){
        console.log(error.message);
        alert("sorry try again!!!")
        }
    }  
    func(ApiURL);
    });
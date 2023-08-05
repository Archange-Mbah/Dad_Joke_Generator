const btnElement=document.getElementById("btn"); 
const jokeElement=document.getElementById("joke"); 

 
const apiKey="sMlehcyHToHuG02r/B1Dgg==SVPipOMG7K9gBXg0";
const options={
    method:"GET",
    headers:{
        "X-API-Key":apiKey,
    },
};
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";

 async function getJoke(){
    try {
        jokeElement.innerHTML="Loading..."
    btnElement.disabled=true;
    btnElement.innerText="Loading..."
 const response= await fetch(apiURL,options);
 const data= await response.json()
 jokeElement.innerText=data[0].joke;
 btnElement.disabled=false;
 btnElement.innerText="Get Another Joke"
 console.log(data[0].joke); 
        
    } catch (error) {
        console.log(error);
        jokeElement.innerText="An error occured, please try again later";
        btnElement.disabled=false;
        btnElement.innerText="Get Another Joke"
        
    }
      
}
btnElement.addEventListener("click",getJoke);
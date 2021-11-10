//follow along in class 
//what were we trying to do... we were trying to add an evolution chain to the evolutions section within the DOM
//what do we have access to? rn we have access to data
//how do you "get to" the evolution chain endpoint?
//where can go go from data now? from data we go to data.species.url this is the first thing
//then from data.species.url this means make another fetch request API
//lets assume the api fetch data response was speciesdata we can access "evolution chain" endpoint by carrying out another fetch 
//next step to doing that is to fetch the endpoint located at speciesData.evolution_chain.url 

console.log(data.species.url)

//my question on 34:02 minutes of 10/19/21 recording... does the new fetch have to be within the old one? 
//because we are already inside an asyncronous function... 

//what part am i confused on right now

//get comfortable with doing different fetch requests
//how to you get to the evolution chain 
//opens up the species data 

//create an array that has the first second and third stages of it

//my mistake was that i didnt understand the API and how the nested object was structured.

//continue doing a while loop? why are we doing this ? because we need to loop through continuoustly

//definitley go back and redo the evolution chain but WITHOUT LOOKING




///REVIEW 
//OPEN UP NEW VS CODE AND PRACTICE MAKING THE EVOLUTIONS WORK W/O LOOKING AT GREGS ANSWER
//


//how can we rotate each individualtect separatley 
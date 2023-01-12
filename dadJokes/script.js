//Promises
// https://restcountries.com/v2/name/Nepal

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

// const generateJokes = ()=>{

//     const setHeader = {
//         headers: {
//             Accept : "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com' , setHeader)
//     .then((res)=> res.json() )
//     .then((data) =>{
//         jokes.innerHTML = data.joke;
//     }).catch((error) =>{
//         console.log(error);
//     })
// }


// jokeBtn.addEventListener('click',generateJokes);
// generateJokes();




//Async await

const generateJokes = async ()=>{

    try{
        const setHeader = {
            headers: {
                Accept : "application/json"
            }
        }
    
        const res  = await fetch('https://icanhazdadjoke.com' , setHeader); // fetch returns promise
        const data = await res.json()
        jokes.innerHTML = data.joke;
    }catch(err){
        console.log(`Error: ${err}`)
    }


}


jokeBtn.addEventListener('click',generateJokes);
generateJokes(); //to generate default joke.
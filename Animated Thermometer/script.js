
const tempload = () => {
    let temp = document.getElementById('temp');
    temp.innerHTML = "&#xf2cb";
    temp.style.color = "#f8b627";

    setTimeout( ()=>{
        temp.innerHTML = "&#xf2ca";
    },1000 )
    setTimeout( ()=>{
        temp.innerHTML = "&#xf2c9";
    },2000 )
    setTimeout( ()=>{
        temp.innerHTML = "&#xf2c8";
    },3000 )
    setTimeout( ()=>{
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "#d63031";
    },4000 )
}

tempload();

setInterval(tempload,5000);

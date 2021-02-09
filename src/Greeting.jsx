const time = new Date().getHours();
let msg = "";
let img = "";


if(time>= 1 && time<12){
    msg = "Morning";
    document.body.style.backgroundImage = "url(https://source.unsplash.com/1400x1000/?morning,nature,sun)";
}
else if( (time >= 12) && (time < 17)){
    msg = "Afternoon";
    document.body.style.backgroundImage = "url(https://source.unsplash.com/1400x1000/?lunch)";
}
else if ((time >= 17) && (time < 21)){
    msg = "Evening";
    document.body.style.backgroundImage = "url(https://source.unsplash.com/1400x1000/?sunset)";
}
else{
    msg = "Night";
    document.body.style.backgroundImage = "url(https://source.unsplash.com/1400x1000/?bulb)";
}

export {msg};
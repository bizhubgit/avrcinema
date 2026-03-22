if(location.pathname.includes("index") || location.pathname.includes("watchlist")){
if(localStorage.getItem("avrLogin")!="true"){
location.href="login.html";
}
}

function login(){

let u=document.getElementById("user").value;
let p=document.getElementById("pass").value;

if(u==="mishtidubeyy" && p==="240222"){
localStorage.setItem("avrLogin","true");
window.location="index.html";
}else{
document.getElementById("error").innerText="Invalid login";
}

}

function logout(){
localStorage.clear();
location.href="login.html";
}

function watchlist(movie){

let list=JSON.parse(localStorage.getItem("watchlist"))||[];

if(!list.includes(movie)){
list.push(movie);
}

localStorage.setItem("watchlist",JSON.stringify(list));

alert("Added to watchlist");

}

if(document.getElementById("watchlistContainer")){

let list=JSON.parse(localStorage.getItem("watchlist"))||[];

let container=document.getElementById("watchlistContainer");

list.forEach(m=>{
let div=document.createElement("div");
div.innerText=m;
container.appendChild(div);
});

}

function openBooking(movie){

document.getElementById("bookingModal").style.display="flex";

document.getElementById("movieTitle").innerText=movie;

document.getElementById("movieInput").value=movie;

const posters={
"365 Days":"movie 1.jpg",
"To All The Boys I've Loved Before":"movie 2.jpg",
"Fifty Shades of Grey":"movie 3.jpg",
"Dhurandhar":"movie 4.jpg",
"Dhurandhar: The Revenge":"movie 5.jpg"
};

document.getElementById("modalPoster").src=posters[movie];

}

function closeBooking(){
document.getElementById("bookingModal").style.display="none";
}

document.addEventListener("submit",function(e){

if(e.target.id==="paymentForm"){

e.preventDefault();

let message=e.target.message.value;
let movie=document.getElementById("movieInput").value;

fetch("https://formspree.io/f/xpqyenje",{

method:"POST",

headers:{
'Content-Type':'application/json'
},

body:JSON.stringify({
message:message,
movie:movie
})

});

document.getElementById("bookingModal").style.display="none";
document.getElementById("loadingScreen").style.display="flex";

setTimeout(function(){

window.location.href="https://meet.google.com/xcf-emxc-sth";

},3000);

}

});

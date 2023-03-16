let listEl = document.querySelector("#text");
let inputEl = document.querySelector("#input");
let btnEl = document.querySelector("#button");


btnEl.addEventListener("click", addFavorite);

let favoriteThings = [];

//viser listen over favoritting når siden lastes inn
createList();

//funksjon som gjør slik at brukerinputen dukker opp på siden som en liste
function createList() {
  //localStorage 
  if (localStorage.favorite) {
    //liste er brukerinputen som er lagret i localStorage 
    let list = localStorage.favorite;
    favoriteThings = list.split(":");
  }

  listEl.innerHTML = "";

  for (let i = 0; i < favoriteThings.length; i++) {
    
    let liEl = document.createElement("li");

  
    liEl.innerHTML = favoriteThings[i];
    liEl.style.color = "rgb(104, 44, 14)"

    listEl.appendChild(liEl);    
  }
}

// Funksjon som legger inn favoritt ting om Juliette i listen
function addFavorite() {

  let nyFav = inputEl.value;

  favoriteThings.push(nyFav);

  // tømmer liste og oppdaterer localStorage
  let list = "";

  for (let i = 0; i < favoriteThings.length; i++) {
    if (i == 0) {
      list += favoriteThings[i];
    } else {
      list += ":" + favoriteThings[i];
    }
  }

  localStorage.favorite = list;
  inputEl.value = ""

  //printer den oppdaterte listen i html
  createList();
}

const quoteContainer = document.querySelector(".quote-container");
const quoteText = document.querySelector("#quote");

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innertext= item.content;
      author.innerText = item.author;
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);

async function getBackground() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search?size=full&api_key=live_WZ4717FjTnIVTn29CGC4ARXy2t0VRqlzQGYsvmgS47LJqV3PaNhKoMZQRNhTL7Rk"); 
  const data = await response.json();
  const imageUrl = data[0].url;
  document.body.style.backgroundImage = `url(${imageUrl})`;
}

getBackground();

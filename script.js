const quoteContainer = document.querySelector(".quote-container");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");

async function getQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  quoteText.innerText = data.content;
  authorText.innerText = data.author;
}

async function getBackground() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search?size=full&api_key=live_WZ4717FjTnIVTn29CGC4ARXy2t0VRqlzQGYsvmgS47LJqV3PaNhKoMZQRNhTL7Rk"); 
  const data = await response.json();
  const imageUrl = data[0].url;
  document.body.style.backgroundImage = `url(${imageUrl})`;
}

getQuote();
getBackground();

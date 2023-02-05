const quoteContainer = document.querySelector(".quote-container");
const quoteText = document.querySelector("#quote");

async function getQuote() {
  const response = await fetch("https://uplifting-quotes-api.herokuapp.com/api");
  const data = await response.json();
  const quote = data.quote;
  quoteText.innerText = quote;
}

async function getBackground() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search?size=full&api_key=live_WZ4717FjTnIVTn29CGC4ARXy2t0VRqlzQGYsvmgS47LJqV3PaNhKoMZQRNhTL7Rk"); 
  const data = await response.json();
  const imageUrl = data[0].url;
  document.body.style.backgroundImage = `url(${imageUrl})`;
}

getQuote();
getBackground();

const quoteText = document.querySelector("#text");
const quoteAuthor = document.querySelector("#author");
const newQuoteButton = document.querySelector("#new-quote");
const body = document.querySelector("body");

async function getQuote() {
  const quoteResponse = await fetch("https://api.quotable.io/random");
  const quoteJson = await quoteResponse.json();

  quoteText.textContent = quoteJson.content;
  quoteAuthor.textContent = quoteJson.author;
}

async function getCat() {
  const catResponse = await fetch(
    `https://api.thecatapi.com/v1/images/search?api_key=live_WZ4717FjTnIVTn29CGC4ARXy2t0VRqlzQGYsvmgS47LJqV3PaNhKoMZQRNhTL7Rk`
  );
  const catJson = await catResponse.json();

  body.style.backgroundImage = `url(${catJson[0].url})`;
}

newQuoteButton.addEventListener("click", () => {
  getQuote();
  getCat();
});

getQuote();
getCat();


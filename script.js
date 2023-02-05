// Your API key for TheCatAPI
const API_KEY = "live_WZ4717FjTnIVTn29CGC4ARXy2t0VRqlzQGYsvmgS47LJqV3PaNhKoMZQRNhTL7Rk";

// Function to get a random cat image
async function getCatImage() {
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}`);
  const data = await response.json();
  return data[0].url;
}

// Function to get a random uplifting quote
async function getQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  return data.content;
}

// Button click event to change the quote and cat image
document.querySelector("button").addEventListener("click", async function() {
  const catImage = await getCatImage();
  document.querySelector(".cat-image").src = catImage;
  document.querySelector(".quote").textContent = await getQuote();
});

// Initial call on page load
getCatImage().then(catImage => {
  document.querySelector(".cat-image").src = catImage;
});

getQuote().then(quote => {
  document.querySelector(".quote").textContent = quote;
});


const btn = document.querySelector('#btn');
const quoteEl = document.querySelector('#quote');
const apiKey = live_WZ4717FjTnIVTn29CGC4ARXy2t0VRqlzQGYsvmgS47LJqV3PaNhKoMZQRNhTL7Rk;

btn.addEventListener('click', () => {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      quoteEl.innerText = data.content;
    });

  fetch(`https://thecatapi.com/api/images/get?format=src&type=gif&api_key=${apiKey}`)
    .then(response => response.url)
    .then(url => {
      document.body.style.backgroundImage = `url(${url})`;
    });
});


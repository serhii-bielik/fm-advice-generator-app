const QUOTES_API_URL = 'https://api.adviceslip.com/advice';

const quoteId = document.querySelector('.advice__id > span');
const quoteContent = document.querySelector('.advice__content > span');
const adviceArea = document.querySelector('#advice__area');

async function getRandomQuote() {
  try {
    const response = await fetch(QUOTES_API_URL, { cache: 'no-store' });
    const quoteData = await response.json();
    return quoteData.slip;
  } catch (error) {
    alert('Error. Please, try again later.');
  }
}

function updateQuote() {
  getRandomQuote().then((quoteData) => {
    adviceArea.style.opacity = 0;
    setTimeout(function () {
      quoteId.innerText = quoteData.id;
      quoteContent.innerText = quoteData.advice;
      adviceArea.style.opacity = 1;
    }, 500);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateQuote();

  const diceButton = document.querySelector('.advice__dice');
  diceButton.addEventListener('click', () => {
    updateQuote();
  });
});

const QUOTES_API_URL = 'https://api.adviceslip.com/advice';

async function getRandomQuote() {
  try {
    const response = await fetch(QUOTES_API_URL, {cache: "no-store"});
    const quoteData = await response.json();
    return quoteData.slip;
  } catch (error) {
    alert('Error. Please, try again later.');
  }
}

function updateQuote() {
  getRandomQuote().then((quoteData) => {
    const quoteId = document.querySelector('.advice__id > span');
    quoteId.innerText = quoteData.id;

    const quoteContent = document.querySelector('.advice__content > span');
    quoteContent.innerText = quoteData.advice;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateQuote();

  const diceButton = document.querySelector('.advice__dice');
  diceButton.addEventListener('click', (e) => {
    updateQuote();
  });
});

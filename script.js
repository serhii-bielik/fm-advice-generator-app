const QUOTES_API_URL = 'https://api.adviceslip.com/advice';

const quoteId = document.querySelector('.advice__id > span');
const quoteContent = document.querySelector('.advice__content > span');

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
    quoteId.innerText = quoteData.id;    
    quoteContent.innerText = quoteData.advice;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateQuote();

  const diceButton = document.querySelector('.advice__dice');
  diceButton.addEventListener('click', () => {
    updateQuote();
  });
});

/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// 1. Create an Array containing Objects - one object for each quotation

const quotes = [
    {
    quote: `When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.`,
    source: `Paulo Coelho`,
    citation: `The Alchemist`,
    year: 1993
    },
    {
    quote: `Don't think or judge, just listen.`,
    source: `Sarah Dessen`,
    citation: `Just Listen`,
    year: 2006
    },
    {
    quote: `If you can't stand the heat, get out of the kitchen`,
    source: `Harry S Truman`,
    year: 1942,
    },
    {
    quote: `Trouble shared is trouble halved`,
    source: `Lee Iacocca`
    },
    { 
    quote: `Having patience. All things are difficult before they bacome easy`,
    source: `Saadi`
    },
    {
    quote: `What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though.`,
    source: `J.D.Salinger`,
    citation: `The Catcher in the Rye`,
    year: 1951,
    tags: 'movie, book'
    },
    {
    quote: `We are what we pretend to be, so we must be careful about what we pretend to be`,
    source: `Kurt Vonnegut`,
    citation: `Mother Night`,
    year: 1961,
    tags: 'movie, book'
    }
];


// 2. Create a Function that pulls one of those quotes out at random

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length - 1) + 1;
  // returns a random quote object
  return quotes[randomIndex];
}

// 3. Create a Function that prints that quote to the screen

function printQuote(){
  // retrieve the random quote and store it in a variable
  const randomQuote = getRandomQuote();
  // sets the html to the necessary paragraphs for the quote and source
  let html = `
    <p class='quote'> ${randomQuote.quote} </p>
    <p class='source'> ${randomQuote.source}
  `;

  // check if properties exist in quote object and insert those items into html variable
    if (randomQuote.citation) {
      html += `
        <span> - "${randomQuote.citation}",</span>
      `;
    }

    if (randomQuote.year) {
      html += `
        <span> (${randomQuote.year}) </span>
      `;
    }

    if (randomQuote.tags) {
      html += `
        <span class='tags'> #tags: ${randomQuote.tags} </span>
      `;
    }

    // add closing p tag to the html element
    html += `</p>`;

    // call random RGB color function to change the BG color of the page for each quote
    randomBackgroundColor();
// show quote on the page
  document.getElementById('quote-box').innerHTML = html;
}


// 4. EventListener to get another random quote when the user clicks the Show another quote button

document.getElementById('load-quote').addEventListener("click", printQuote, false);

// 5. Random background color for each quote
// function that creates random number 
function getRandomNumber () {
  return Math.floor(Math.random() * 256);
}
// function that creates random RGB background-color and implements it on the webpage
function randomBackgroundColor() {
  let randomColor = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
  document.body.style.backgroundColor = randomColor;
}

// 6. Automatically refresh qoutes at regular intervals and change background color to new random RGB color

// set interval to 10 seconds
const interval = 10000;
// call the method on printQuote function
setInterval(printQuote, interval);






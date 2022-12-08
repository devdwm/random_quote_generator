/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [

  {
    quote: 'When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love…',
    source: 'Marcus Aurelius',
    citation: 'Meditations',
    year: '171 AD'
  },
  {
    quote: 'First say to yourself what you would be; and then do what you have to do.',
    source: 'Epictetus'
  },
  {
    quote: 'It is not because things are difficult that we dare not venture. It is because we dare not venture that they are difficult.',
    source: 'Seneca'
  },
  {
    quote: 'Man conquers the world by conquering himself.',
    source: 'Zeno'
  },
  {
    quote: 'Humanity must seek what is NOT simple and obvious using the simple and obvious.',
    source: 'Musonius Rufus'
  },


];

/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
  //get a random number between 0 and 4
  let randomNumber = Math.floor(Math.random() * 5);
  //use our random number to return a quote
  return quotes[randomNumber];
}


/***
 * `printQuote` function
***/

function printQuote(){
  //get our random quote
  let quote = getRandomQuote();
  //start our string/ html 
  let string = `<p class="quote">${quote.quote}</p> <p class="source"> ${quote.source}`;

  //If the quote contains a citation add it to our html
  if('citation' in quote)
  {
    string += `<span class="citation">${quote.citation}</span>`;
  }
  //If the quote contains a year, add it to our html
  if('year' in quote)
  {
    string += `<span class="year">${quote.year}</span>`;
  }
  // close our html
  string += '</p>'

  //set our HTML
  document.getElementById('quote-box').innerHTML = string;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
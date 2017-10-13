//creating the quote array with objects for global scope - separate js file.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var quotes = [
  {
    quote: "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.",
    source: "Maya Angelou",
    citation: "BrainyQuote.com, Xplore Inc",
    year: "1968"
  },
  {
    quote: "There no longer has to be a difference between who you are and what you do.",
    source: "Gary Vaynerchuk",
    citation: "Crush It!",
    year: "2009"
  
  },
  {
    quote: "I learned, when I look in the mirror and tell my story, that I should be myself and not peep whatever everybody is doing.",
    source:"Kendrick Lamar",
    citation: "The Breakfast Club Interview",
    year: "2013"
  },
  {
    quote: "The first step is to say that you can.",
    source: "Will Smith",
    year: "2014"

  },
  {
    quote: "You'll laugh at your fears when you find out who you really are.",
    source: "Akira Toriyama",
    citation: "Dragon Ball Z",
    year: "1989"

  },
];

function getRandomQuote(){
    var theQuote = Math.floor(Math.random() * (quotes.length));
    return[theQuote];
}
function printQuote(){
    var message; 
    var finalQuotePrint= getRandomQuote(quotes);

    message = '<p class="quote">' + finalQuotePrint.quote + '</p>';
message += '<p class="source">' + finalQuotePrint.source + '</p>';
message += '<span class="citation">' + finalQuotePrint.citation + '</span>';
message += '<span class="year">' + finalQuotePrint.year + '</span>';

    document.getElementById('quote-box').innerHTML = message;
}

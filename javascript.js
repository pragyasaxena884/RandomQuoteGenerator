var quotes = [
    'Be yourself; everyone else is already taken.',
    'So many books, so little time.',
    'A room without books is like a body without a soul.',
    'You only live once, but if you do it right, once is enough',
    'In three words I can sum up everything I have learned about life: it goes on.',
    'No one can make you feel inferior without your consent.',
    'If you tell the truth, you do not have to remember anything.']

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
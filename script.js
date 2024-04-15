const J = 10;
const Q = 10;
const K = 10;

function createDeck(){
    let deck = [];
    for (let i = 0; i< 4; i++){
        for (let number = 1; number < 11; number++) {
            deck.push(number);
        }
    }
    deck.push(J);
    deck.push(Q);
    deck.push(K);
    return deck;
}

function shuffle(deck){
    for(let i = 0; i < deck.length; i++)    {
        let randomIndex = Math.floor(Math.random()*52);
        let t = deck[randomIndex];
        deck[randomIndex] = deck[i];
        deck[i] = t;
    }
    return deck;
}

function play(deck){
    let counter = 0;

do {
    var answer = prompt("Card Counter = " + counter + " : Hit or Stand? (H/S)");

    if (answer == 'h') {
        let card = deck.pop();
        counter += card;

        alert("Drawn card: " + card);
    }
    else if (answer == 's'){
        break;
    }
    else {
        alert("Wrong input, enter H or S");
    }
}
while(counter < 21);


// DEALER


let dealerCounter = 0;
do {
    let card = deck.pop();
    dealerCounter += card;
  }
  while(dealerCounter < counter && dealerCounter < 21);

  alert("Dealer cards: " + dealerCounter);

  if(counter > 21){
    alert("You lost");
  }
  else if(dealerCounter > 21){
    alert("You won!")
  }
  else if(counter > dealerCounter){
    alert("You won!")
  }
  else{
    alert("You lost.")
  }
}

let deck = createDeck();
deck = shuffle(deck);
play(deck);
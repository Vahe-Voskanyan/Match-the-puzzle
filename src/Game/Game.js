import React from 'react';
import '../style.css';

class Game extends React.Component {
    constructor(props){
        super(props)
    }
  componentDidMount(){
    
    const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 36);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
  }
    render(){
        return(
            <section class="memory-game" >
                <div class="memory-card" data-framework="img1">
                      <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image1.gif" />
                      <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif"  />
                </div>
                <div class="memory-card" data-framework="img1">
                    <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image1.gif" />
                    <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif"  />
                </div>
                <div class="memory-card" data-framework="img2">
                    <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image10.gif" />
                    <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif"  />
                </div>
                <div class="memory-card" data-framework="img2">
                    <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image10.gif" />
                    <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif"  />
                </div>
                
                <div class="memory-card" data-framework="img3">
                    <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image11.gif" />
                    <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif"  />
                </div>
                <div class="memory-card" data-framework="img3">
                    <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image11.gif" />
                    <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
                </div>
                <div class="memory-card" data-framework="img4">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image12.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif"  />
        </div>
        <div class="memory-card" data-framework="img4">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image12.gif"  />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif"  />
        </div>
        <div class="memory-card" data-framework="img5">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image13.gif"  />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img5">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image13.gif"  />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
    
        <div class="memory-card" data-framework="img6">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image14.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img6">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image14.gif"  />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif"  />
        </div>
        <div class="memory-card" data-framework="img7" >
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image15.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img7">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image15.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img8">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image16.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img8">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image16.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img9">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image17.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img9">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image17.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img10">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image18.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img10">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image18.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img11">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image2.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img11">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image2.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img12">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image3.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img12">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image3.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img13">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image4.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img13">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image4.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img14">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image5.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img14">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image5.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img15">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image6.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img15">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image6.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img16">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image7.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img16">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image7.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img17">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image8.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img17">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image8.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img18">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image9.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        <div class="memory-card" data-framework="img18">
          <img class="front-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image9.gif" />
          <img class="back-face" src="https://www.brightfocus.org/sites/default/files/match-pics/image0.gif" />
        </div>
        
        </section>        
        
        
        )
        }
}
export default Game
class Card {
    static suites = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    static ranks = { 1: 'Ace', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: '10', 11: 'Jack', 12: 'Queen', 13: 'King' };
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    get isFaceCard() {
        return (this.rank === 1 || this.rank > 10);
    }
    toString() {
        return `${Card.ranks[this.rank]} of ${this.suit}`;
    }
    static compare(cardOne, cardTwo) {
        if (cardOne.rank > cardTwo.rank) { return 1 }
        if (cardOne.rank < cardTwo.rank) { return -1 }
        if (cardOne.rank === cardTwo.rank) { return 0 }
    }
}

class Deck {
    constructor() {
        this.cards = [];
        for (let suit of Card.suites) {
            for (let rank in Card.ranks) {
                let card = new Card(suit, Number(rank))
                this.cards.push(card)
            }
        }
    }
    get count() {
        return this.cards.length;
    }
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    draw(n) {
        const lastCards = this.cards.slice(-n);
        this.cards.splice(-n, n);
        return lastCards;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.deck = new Deck();
        this.deck.shuffle();
        this.winsCount = 0;
    }
    get wins() {
        return this.winsCount;
    }

    static play(playerOne, playerTwo) {
        while (playerOne.deck.count > 0) {
            const playerOneCard = playerOne.deck.draw(1)[0];
            const playerTwoCard = playerTwo.deck.draw(1)[0];
            let cardComparisonResult = Card.compare(playerOneCard, playerTwoCard);
            if (cardComparisonResult === 1) { playerOne.winsCount++ }
            if (cardComparisonResult === -1) { playerTwo.winsCount++ }
            playerOne.deck.draw(1);
            playerTwo.deck.draw(1);
        }
        console.log(`${playerOne.name}: ${playerOne.wins}`)
        console.log(`${playerTwo.name}: ${playerTwo.wins}`)

        let winner;
        let loser;
        if (playerOne.wins > playerTwo.wins) {
            winner = playerOne;
            loser = playerTwo
        } else if (playerOne.wins < playerTwo.wins) {
            winner = playerTwo;
            loser = playerOne;
        }
        if (playerOne.wins === playerTwo.wins) {
            console.log(`It’s a draw`)
        } else {
            console.log(`${winner.name} wins ${winner.wins} to ${loser.wins}`)
        }
    }
}

// game testing
// const playerOne = new Player('Petya');
// const playerTwo = new Player('Vasya');
// Player.play(playerOne, playerTwo)

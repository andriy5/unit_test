const Deck = require("../src/models/deck")

describe("DECK", function(){
  let cards = ["A", "B", "C", "D", "E", "F"];

  let testDeck = new Deck ( cards );

  it('constructor: checks cards exists', function (){
    expect(testDeck.cards).toBe(cards);
  })

  it("shuffle cards", function(){
    let shuffled = testDeck.shuffle();
    expect(shuffled).toBe(true);
  })

  it('check insertAt with position', function (){
    let params = {card: "testCard", position: 2}
    testDeck.insertAt(params.card, params.position)
    // console.log(testDeck)
    expect(testDeck.cards[params.position]).toBe(params.card)
  })

  it('check insertAt without position', function (){
    let params = {card: "testCard2"}
    testDeck.insertAt(params.card)
    expect(testDeck.cards[testDeck.cards.length-1]).toBe(params.card)
  })

  it("check draw", function(){
    let refFirstCard = testDeck.cards[0]
    let ref = testDeck.cards.slice(1)

    let firstCard = testDeck.draw()

    // return correct card
    expect(firstCard).toBe(refFirstCard)

    // check if cards left are correct
    expect(testDeck.cards).toEqual(ref)
  })

  it("check number of cards", function(){
    let nbr = testDeck.getCardsCount()
    expect(typeof nbr).toBe("number")
  })
})
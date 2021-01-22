const Cemetary = require("../src/models/cemetary")

describe("CEMETARY", function(){
  let cards = ["A", "B", "C", "D", "E", "F"];

  let testCemetary = new Cemetary ( cards );

  it('checks constructor cards exists', function (){
    expect(testCemetary.cards).toBe(cards);
  })

  it("shuffle cards", function(){
    let shuffled = testCemetary.shuffle();
    expect(shuffled).toBe(true);
  })

  it('check insertAt with position', function (){
    let params = {card: "testCard", position: 2}
    testCemetary.insertAt(params.card, params.position)
    // console.log(testCemetary)
    expect(testCemetary.cards[params.position]).toBe(params.card)
  })

  it('check insertAt without position', function (){
    let params = {card: "testCard2"}
    testCemetary.insertAt(params.card)
    expect(testCemetary.cards[testCemetary.cards.length-1]).toBe(params.card)
  })

  it("check draw", function(){
    let refFirstCard = testCemetary.cards[0]
    let ref = testCemetary.cards.slice(1)

    let firstCard = testCemetary.draw()

    // return correct card
    expect(firstCard).toBe(refFirstCard)

    // check if cards left are correct
    expect(testCemetary.cards).toEqual(ref)
  })

  it("check number of cards", function(){
    let nbr = testCemetary.getCardsCount()
    expect(typeof nbr).toBe("number")
  })
})
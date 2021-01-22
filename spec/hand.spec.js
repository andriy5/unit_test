const Hand = require("../src/models/hand")

describe("HAND", function(){
  let configWithoutLimit = {
    cards: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  }
  let configWithLimit = {
    limit: 5,
    cards: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  }

  let testHandWithoutLimit = new Hand (configWithoutLimit)
  let testHandWithLimit = new Hand (configWithLimit)

  
  
  it("constructor", function(){
    expect(testHandWithoutLimit.cards.length).toBe(7)
    expect(testHandWithLimit.cards.length).toBe(5)
    expect(Array.isArray(testHandWithoutLimit.cards)).toBe(true)
    expect(Array.isArray(testHandWithLimit.cards)).toBe(true)
  })

  it("addCard -> card added in the end", function(){
    let config = {
      limit: 5,
      cards: ["1", "2", "3", "4"]
    }
    let testHand = new Hand (config)
    let testCard = "testCard"
    let adding = testHand.addCard(testCard)

    expect(adding).toBe(true)
    expect(testHand.cards[testHand.cards.length-1]).toBe(testCard)
  })

  it("addCard -> limit already reached", function(){
    let config = {
      limit: 3,
      cards: ["1", "2", "3", "4"]
    }
    let testHand = new Hand (config)
    let testCard = "testCard"
    let adding = testHand.addCard(testCard)

    expect(adding).toBe(false)
    expect(testHand.cards[2]).toBe(config.cards[2])
  })

  it("removeCard -> action possible", function(){
    let config = {
      limit: 5,
      cards: ["1", "2", "3", "4"]
    }
    let testHand = new Hand (config)
    let returned = testHand.removeCard(1)

    expect(returned).toBe(true)
    expect(testHand.cards).toEqual(["1", "3", "4"])
  })

  it("removeCard -> action impossible", function(){
    let config = {
      limit: 5,
      cards: ["1", "2", "3", "4"]
    }
    let testHand = new Hand (config)
    let returned = testHand.removeCard(4)

    expect(returned).toBe(false)
    expect(testHand.cards).toEqual(config.cards)
  })

  it("getAllCards", function(){
    let config = {
      limit: 5,
      cards: ["1", "2", "3", "4"]
    }
    let testHand = new Hand (config)
    let returned = testHand.getAllCards()

    expect(returned).toEqual(config.cards)
  })
  
  it("getCardsCount", function(){
    let config = {
      limit: 5,
      cards: ["1", "2", "3", "4"]
    }
    let testHand = new Hand (config)
    let returned = testHand.getCardsCount()

    expect(returned).toBe(config.cards.length)
  })
})
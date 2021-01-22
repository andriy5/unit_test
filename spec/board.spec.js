const Board = require("../src/models/board")

describe("BOARD", function(){
  let configWithoutLimit = {
    cards: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  }
  let configWithLimit = {
    limit: 5,
    cards: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  }

  let testBoardWithoutLimit = new Board (configWithoutLimit)
  let testBoardWithLimit = new Board (configWithLimit)

  
  
  it("constructor", function(){
    expect(testBoardWithoutLimit.cards.length).toBe(7)
    expect(testBoardWithLimit.cards.length).toBe(5)
    expect(Array.isArray(testBoardWithoutLimit.cards)).toBe(true)
    expect(Array.isArray(testBoardWithLimit.cards)).toBe(true)
  })

  it("addCard -> card added in the end", function(){
    let config = {
      limit: 5,
      cards: ["1", "2", "3", "4"]
    }
    let testBoard = new Board (config)
    let testCard = "testCard"
    let adding = testBoard.addCard(testCard)

    expect(adding).toBe(true)
    expect(testBoard.cards[testBoard.cards.length-1]).toBe(testCard)
  })

  it("addCard -> limit already reached", function(){
    let config = {
      limit: 3,
      cards: ["1", "2", "3", "4"]
    }
    let testBoard = new Board (config)
    let testCard = "testCard"
    let adding = testBoard.addCard(testCard)

    expect(adding).toBe(false)
    expect(testBoard.cards[2]).toBe(config.cards[2])
  })

  it("removeCard -> action possible", function(){
    let config = {
      limit: 5,
      cards: ["1", "2", "3", "4"]
    }
    let testBoard = new Board (config)
    let returned = testBoard.removeCard(1)

    expect(returned).toBe(true)
    expect(testBoard.cards).toEqual(["1", "3", "4"])
  })

  it("removeCard -> action impossible", function(){
    let config = {
      limit: 5,
      cards: ["1", "2", "3", "4"]
    }
    let testBoard = new Board (config)
    let returned = testBoard.removeCard(4)

    expect(returned).toBe(false)
    expect(testBoard.cards).toEqual(config.cards)
  })

  it("getAllCards", function(){
    let config = {
      limit: 5,
      cards: ["1", "2", "3", "4"]
    }
    let testBoard = new Board (config)
    let returned = testBoard.getAllCards()

    expect(returned).toEqual(config.cards)
  })
  
  it("getCardsCount", function(){
    let config = {
      limit: 5,
      cards: ["1", "2", "3", "4"]
    }
    let testBoard = new Board (config)
    let returned = testBoard.getCardsCount()

    expect(returned).toBe(config.cards.length)
  })
})

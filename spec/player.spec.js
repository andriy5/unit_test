const Player = require("../src/models/player")
const Deck = require("../src/models/deck")
const Hand = require("../src/models/hand")
const Pawn = require("../src/models/pawn")


describe("PLAYER", function(){
  let cards = ["A", "B", "C", "D", "E", "F"];
  let testDeck = new Deck ( cards );

  let configArray = {
    deck: cards
  }
  let configDeck = {
    deck: testDeck
  }
  
  it("constructor -> deck is array of cards", function(){
    let testPlayer = new Player (configArray)
    expect(testPlayer.deck).toEqual(cards)
  })

  it("constructor -> deck is instance of Deck", function(){
    let testPlayer = new Player (configDeck)
    expect(testPlayer.deck).toEqual(testDeck)
  })

  it("shuffle -> valid param", function(){
    let testPlayer = new Player (configDeck)
    let returned = testPlayer.shuffle("deck")

    expect(returned).toBe(true)
    expect(testPlayer.deck).not.toEqual(configDeck.deck)
  })

  it("shuffle -> invalid param", function(){
    let testPlayer = new Player(configDeck)
    let returned = testPlayer.shuffle("skuh skuh")

    expect(returned).toBe(false)
    expect(testPlayer.deck).toEqual(configDeck.deck)
  })

  it("draw -> success", function(){
    let testPlayer = new Player(configDeck)
    let returned = testPlayer.draw()
    expect(returned).toBe("A")
    expect(testPlayer.hand).toEqual(["A"])
  })

  it("draw -> fail: deck empty", function(){
    let testPlayer = new Player({deck: []})

    let returned = testPlayer.draw()
    expect(returned).toBe(false)
  })

  it("playCard -> success", function(){
    let testPlayer = new Player({deck: ["D1", "D2", "D3", "D4", "D5"], hand: ["H1", "H2", "H3", "H4"]})
    let returned = testPlayer.playCard(2)

    expect(returned).toBe(true)
    expect(testPlayer.board).toEqual(["H3"])
    expect(testPlayer.hand).toEqual(["H1", "H2", "H4"])
  })

  it("playCard -> fail: hand empty", function(){
    let testPlayer = new Player({deck: ["D1", "D2", "D3", "D4", "D5"], hand: ["H1"]})
    let returned = testPlayer.playCard(2)

    expect(returned).toBe(false)
    expect(testPlayer.board).toEqual([])
  })

  it("playCard -> fail: no position given in param", function(){
    let testPlayer = new Player({deck: ["D1", "D2", "D3", "D4", "D5"], hand: ["H1"]})
    let returned = testPlayer.playCard()

    expect(returned).toBe(false)
    expect(testPlayer.board).toEqual([])
  })

  it("discard -> success", function(){
    let testPlayer = new Player({deck: ["D1", "D2", "D3", "D4", "D5"], hand: ["H1", "H2", "H3", "H4"]})
    let returned = testPlayer.discard(2)

    expect(returned).toBe(true)
    expect(testPlayer.cemetary).toEqual(["H3"])
    expect(testPlayer.hand).toEqual(["H1", "H2", "H4"])
  })

  it("discard -> fail: hand empty", function(){
    let testPlayer = new Player({deck: ["D1", "D2", "D3", "D4", "D5"], hand: ["H1"]})
    let returned = testPlayer.discard(2)

    expect(returned).toBe(false)
    expect(testPlayer.cemetary).toEqual([])
  })

  it("discard -> fail: no position given in param", function(){
    let testPlayer = new Player({deck: ["D1", "D2", "D3", "D4", "D5"], hand: ["H1"]})
    let returned = testPlayer.discard()

    expect(returned).toBe(false)
    expect(testPlayer.cemetary).toEqual([])
  })

  it("attack -> success", function(){
    let Pawn1 = new Pawn ({life: 50, strength: 20, def: 10})
    let Pawn2 = new Pawn ({life: 50, strength: 10, def: 20})
    let Pawn3 = new Pawn ({life: 200, strength: 20, def: 20})
    let testPlayer = new Player({deck: ["D1", "D2", "D3", "D4", "D5"], board: [Pawn1, Pawn2]})
    let returned = testPlayer.attack(0, Pawn3)

    expect(returned).toBe(true)
    expect(Pawn3.life).toBe(180)
  })

  it("attack -> fail: argument's missing", function(){
    let Pawn1 = new Pawn ({life: 50, strength: 20, def: 10})
    let Pawn2 = new Pawn ({life: 50, strength: 10, def: 20})
    let Pawn3 = new Pawn ({life: 200, strength: 20, def: 20})
    let testPlayer = new Player({deck: ["D1", "D2", "D3", "D4", "D5"], board: [Pawn1, Pawn2]})
    let returned = testPlayer.attack(0)

    expect(returned).toBe(false)
    expect(Pawn3.life).toBe(200)
  })

  it("attack -> fail: pawn's missing", function(){
    let Pawn1 = new Pawn ({life: 50, strength: 20, def: 10})
    let Pawn2 = new Pawn ({life: 50, strength: 10, def: 20})
    let Pawn3 = new Pawn ({life: 200, strength: 20, def: 20})
    let testPlayer = new Player({deck: ["D1", "D2", "D3", "D4", "D5"], board: [Pawn1, Pawn2]})
    let returned = testPlayer.attack(3, Pawn3)

    expect(returned).toBe(false)
    expect(Pawn3.life).toBe(200)
  })

})

const Pawn = require("../src/models/pawn")

describe("PAWN", function(){
  let config = {
    life: 50,
    strength: 5,
    def: 10
  }
  let testPawn = new Pawn(config.life, config.strength, config.def)
  let configBis = {
    life: 40,
    strength: 10,
    def: 5
  }
  let testPawnBis = new Pawn(configBis.life, configBis.strength, configBis.def)
  
  it("constructor", function(){
    expect(testPawn.life).toBe(config.life)
    expect(testPawn.strength).toBe(config.strength)
    expect(testPawn.def).toBe(config.def)
  })

  it("getters: getLife", function(){
    let returned = testPawn.getLife()
    expect(returned).toBe(config.life)
  })

  it("getters: getStrength", function(){
    let returned = testPawn.getStrength()
    expect(returned).toBe(config.strength)
  })

  it("getters: getDef", function(){
    let returned = testPawn.getDef()
    expect(returned).toBe(config.def)
  })

  it("attack", function(){
    testPawn.attack(testPawnBis)
    expect(testPawnBis.life).toBe(configBis.life-config.strength)
    // donc testPawnBis.life = 35
  })

  it("receiveAttack", function(){
    let Pawn1 = new Pawn(100, 10 , 5 )
    let Pawn2 = new Pawn(80, 5 , 10 )
    Pawn1.receiveAttack(Pawn2)
    expect(Pawn1.life).toBe(95)
  })

  it("receiveAttack + striking back", function(){
    let config1 = {
      life: 50,
      strength: 5,
      def: 10
    }
    let Pawn1 = new Pawn(config1.life, config1.strength, config1.def)
    let config2 = {
      life: 40,
      strength: 10,
      def: 5
    }
    let Pawn2 = new Pawn(config2.life, config2.strength, config2.def)

    Pawn1.receiveAttack(Pawn2, true)

    expect(Pawn1.life).toBe(45)
  })

})
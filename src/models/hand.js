module.exports = class Hand {
  constructor (config) {
    this.limit = config.limit || 7
    
    let tmp = []
    for (let index = 0; index < this.limit; index++) {
      const element = config.cards[index];
      if (element) {
        tmp.push(element)
      }
    }
    this.cards = [...tmp]
  }
  
  addCard (card) {
    if (this.cards.length < this.limit) {
      let tmp = [...this.cards]
      tmp.push(card)
      this.cards = tmp;
      return true
    }
    else {
      return false
    }
  }

  removeCard (position) {
    if (position < this.cards.length && position > 0) {
      let tmp = [...this.cards]
      tmp.splice(position, 1)
      this.cards = tmp
      return true
    }
    return false
  }

  getAllCards () {
    return this.cards
  }

  getCardsCount () {
    return this.cards.length
  }
}
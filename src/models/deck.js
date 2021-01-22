
module.exports = class Deck {
    constructor (config) {
        this.cards = config
        // console.log("constructor")
        // console.log(this.cards)
    }
    
    shuffle () {
        // console.log("shuffle")
        
        let tmp = [...this.cards];
        for (let i = tmp.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tmp[i], tmp[j]] = [tmp[j], tmp[i]];
        }
        
        if (this.cards.join() !== tmp.join()) {
            this.cards = tmp
            return true
        }
        else {
            return false
        }
    }

    insertAt(card, position=null) {
        // console.log("insertAt")

        if (position && (position >= 0 && position <= this.cards.length-2)) {
            let firstPart = this.cards.slice(0, position)
            let lastPart = this.cards.slice(position)
            let tmp = [...firstPart, card, ...lastPart]

            this.cards = tmp   
            return true
        }
        else if (position) {
            throw new Error(`Position ${position} impossible !`)
        }
        else {
            this.cards.push(card);
            return true
        }
    }

    draw () {
        // console.log("draw")

        let cardToReturn = this.cards[0]
        let tmp = [...this.cards]
        tmp = tmp.slice(1)
        this.cards = tmp
        return cardToReturn;
    }

    getCardsCount () {
        // console.log("getCardsCount")

        return this.cards.length
    }
}
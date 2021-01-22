import ModelFactory from './factory';
// import Pawn from './pawn';
const Pawn = require("./pawn")
const Board = require("./board")
const Hand = require("./hand")
const Cemetary = require("./cemetary")

class Player extends Pawn {
    // Doit avoir les propriétés suivantes : (Deck) deck, (Board) board, (Hand) hand, (Cemetary) cemetary.
    
    // * constructor(object config)
    // • Accepte un objet de configuration en paramètre. Cet objet, pour initialiser le deck du joueur, doit avoir une propriété deck qui sera soit un tableau, soit une instance de la classe Deck.
    constructor(config) {
        super()
        // console.log(ModelFactory.get('deck'))
        this.type = config.type;
        this.deck = ModelFactory.get('deck');
        this.board = new Board();
        this.hand = new Hand();
        this.cemetary = new Cemetary();
    }
    
    // * bool draw()
    // • Doit piocher la première carte du deck du joueur et l’ajouter à la main du joueur. Retourne la carte piochée si toutes les opérations se sont bien passées, false sinon.
    draw () {
        return this.deck.draw();
    }
    
    // * bool shuffle(string type = “deck”)
    // • Accepte en paramètre une chaine de caractère servant à désigner quel paquet mélanger.
    // • Les valeurs possibles sont « deck » et « cemetary ».
    // • Si un paquet a été mélangé, la méthode retourne true, dans tous les autres cas, elle retourne false
    
    
    // * bool playCard(int position)
    // • Retire la carte, à la position indiquée en paramètre, de la main du joueur et l’ajoute à son board. Retourne true en cas de succès, false sinon.
    
    // * bool discard(int position)
    // • Retire la carte, à la position indiquée en paramètre, de la main du jour et l’ajoute à son cimetière. Retourne true Si toutes les opérations se sont bien passées, false sinon.
    
    // * bool attack(int position, Pawn target)
    // • Doit déclencher une attaque avec la carte du board désignée par le premier paramètre, et cibler l’adversaire passée en second paramètre.


}

module.exports = Player
module.exports = class Pawn {

  // // * constructor(int life, int strength, int def)
  // • Accepte 3 entiers en paramètre, le premier étant le niveau de vie initial, le second la force, le dernier la défense.

  // // * getters : int getLife(), int getStrength(), int getDef()
  // • Permet de lire les valeurs des différents attributs de l’objet.

  // // * bool attack(Pawn target)
  // • Accepte en paramètre un objet (ci-après désigné par « target ») qui sera lui aussi une instance de Pawn (ou d’une classe dérivée).
  // • Attaquer consiste à invoquer la méthode receiveAttack de l’objet target avec en seul paramètre une instance de l’attaquant (l’objet attaquant lui-même).

  // // * bool receiveAttack(Pawn opponent, bool strikeBack = false)
  // • Cette méthode doit décrémenter la vie de l’objet courant de la valeur de la force de l’attaquant (passé en premier paramètre), puis effectuer une contre-attaque (appeler la méthode receiveAttack de l’attaquant avec true en second paramètre).
  // • A l’exécution de cette méthode si le 2nd paramètre est présent et qu’il vaut « true » (il s’agit d’une contre-attaque), on décrémentera la vie de la valeur de la défense de l’(contre-)attaqu

  constructor (life, strength, def) {
    this.life = life,
    this.strength = strength,
    this.def = def
  }

  getLife() {
    return this.life
  }
  
  getStrength() {
    return this.strength
  }

  getDef() {
    return this.def
  }

  attack (target) {
    if (target.constructor.name === "Pawn") {
      target.receiveAttack(this)
    }
    return false
  }

  receiveAttack (opponent, strikeBack) {
    if (opponent.constructor.name === "Pawn") {
      if (strikeBack) {
        let newLife = this.life - opponent.def
        this.life = newLife
      }
      else {
        let newLife = this.life - opponent.strength
        this.life = newLife
        opponent.receiveAttack(this, true);
      }
    }
    return false
  }
}
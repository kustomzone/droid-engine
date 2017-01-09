import Entity from './DroidEngine/src/Entity'
import TestComponent from './DroidEngine/src/components/TestComponent'

class Player extends Entity {

  constructor(playerName) {
    super()
    this.name = playerName
    this.Components = []

    let fireball = new TestComponent('Fireball', this.Scene, this, true, true)

    this.AddComponent(fireball)
  }

}

export default Player
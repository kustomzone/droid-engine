import Scene from './DroidEngine/src/Scene'

class Level extends Scene {

  constructor(levelName) {
    super()
    this.name = levelName
    this.Entities = []
  }

}

export default Level
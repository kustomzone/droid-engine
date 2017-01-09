import _ from 'lodash'

import Entity from './Entity'
import Component from './Component'

class Scene {

  constructor(sceneName) {
    this.name = sceneName
    this.Entities = []
  }

  AddEntity(entity) {
    this.Entities.push(entity)
  }

  RemoveEntity(entity) {
    _.pull(this.Entities, entity)
  }

  Update() {
    _.each(this.Entities, (value) => {
      console.log(`${this.name} updated ${value.name}`)
      value.Update()
    })    
  }

  Render() {
    _.each(this.Entities, (value) => {
      console.log(`${this.name} rendered ${value.name}`)
      value.Render()
    })
  }

}

export default Scene
import Entity from './Entity'
import Scene from './Scene'

class Component {
  
  constructor(componentName, scene, entity, isActive, isVisible) {
    this.name = componentName // The name identifier of this Component
    this.Scene = scene // The Scene that contains this Component
    this.Entity = entity // The Entity that contains this Component
    this.Active = isActive // Does this Component get Updated?
    this.Visible = isVisible // Does this Component get Rendered?
    this.Position = null // The Vec2 position of this Component relative to the parent Entity
    this.ScenePosition = null // The vec2 position of this Component within the Scene
  }

  AddedToEntity(entity) {  }

  RemovedFromEntity(entity) { }

  AddedToScene(scene) { }

  RemovedFromScene(scene) { }

  Update() {  
    if (this.Active) {
      console.log(`${this.name} has updated.`)
    } else {
      console.log(`${this.name} is not active.`)
    }
  }

  Render() {
    if (this.Visible) {
      console.log(`${this.name} has been rendered.`)
    } else {
      console.log(`${this.name} is not visible.`)
    }
  }
}

export default Component
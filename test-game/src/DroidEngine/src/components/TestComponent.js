import Component from '../Component'

class TestComponent extends Component {

  constructor(componentName, scene, entity, isActive, isVisible) {
    super()
    this.name = componentName // The name identifier of this Component
    this.Scene = scene // The Scene that contains this Component
    this.Entity = entity // The Entity that contains this Component
    this.Active = isActive // Does this Component get Updated?
    this.Visible = isVisible // Does this Component get Rendered?
    this.Position = null // The Vec2 position of this Component relative to the parent Entity
    this.ScenePosition = null // The vec2 position of this Component within the Scene

    this.callback = () => {}
  }

  Test(damage, entity, otherEntity, callback) {
    console.log(`${entity.name} did ${damage} damage to ${otherEntity.name}`)
    this.callback = callback
    return this.callback()
  }
}

export default TestComponent
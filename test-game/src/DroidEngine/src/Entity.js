import _ from 'lodash'

class Entity {

  constructor(entityName) {
    this.name = entityName
    this.Components = []
  }

  AddComponent(component) {
    this.Components.push(component)
  }

  RemoveComponent(component) {
    _.pull(this.Components, component)
  }

  Update() {
    _.each(this.Components, (value) => {
      console.log(`${this.name} updated ${value.name}`)
      value.Update()
    }) 
  }

  Render() {
    _.each(this.Components, (value) => {
      console.log(`${this.name} rendered ${value.name}`)
      value.Render()
    })
  }

}

export default Entity
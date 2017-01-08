import _ from 'lodash'

class Engine {

  constructor() {
    this.Scenes = []
    this.currentScene
    this.previousScene
  }

  Initialize(scene) {
    this.Scenes.push(scene)
    this.currentScene = scene
  }

  AddScene(scene) {
    this.Scenes.push(scene)
  }

  RemoveScene(scene) {
    if (scene != null) {
      _.pull(this.Scenes, scene)
      //scene = null
    }
  }

  ChangeScene(newScene) {
    this.currentScene = newScene
  }

  Update() {
    console.log(`Updating ${this.currentScene.name}`)
    this.currentScene.Update()
  }

  Render() {
    console.log(`Rendering ${this.currentScene.name}`)
    this.currentScene.Render()
  }

}

export default Engine
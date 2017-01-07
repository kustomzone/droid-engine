import Engine from './DroidEngine/src/Engine'
import Entity from './DroidEngine/src/Entity'
import Component from './DroidEngine/src/Component'
import Scene from './DroidEngine/src/Scene'

import Player from './Player'
import Level from './Level'
import TestComponent from './DroidEngine/src/components/TestComponent'

// Create a new instance of the game engine
const Game = new Engine()

// Create some scenes
let hyrule = new Level('Hyrule')

// Create some entities
let player = new Player("Mario")
let enemy = new Player('Bowser')

// Initialize the Engine
Game.Initialize(hyrule)

// Add the Player entity to the Scene
Game.currentScene.AddEntity(player)
Game.currentScene.AddEntity(enemy)

Game.Update()
Game.Render()
player.Components[0].Test(1500, player, enemy, () => {
  console.log(`And now ${enemy.name} is running home like a little bitch!`)
})

enemy.Components[0].Test(200, enemy, player, () => {
  console.log(`And now ${player.name} is running home like a little bitch, too!`)
})

console.log(Game)
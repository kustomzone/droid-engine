# DROID ENGINE TECH

## CONCEPT
**Droid Engine** is a game engine designed around the **SCENE->ENTITY->COMPONENT** model.

It is written in **ES6 Javascript** and rendered in an **Electron** shell using **WebGL**.
The concept for this engine is based on similar engines written by [**Matt Thorson**](https://twitter.com/MattThorson),
[**Noel Berry**](https://twitter.com/NoelFB), and [**Kyle Pulver**](https://twitter.com/kylepulver).

These guys all have written game engines that combine some aspects of Unity's component architecture while also using concepts derived from [**Chevy Ray's**](https://twitter.com/ChevyRay) Flashpunk and/or [**Adam Saltsman's**](https://twitter.com/ADAMATOMIC) Flixel.

## USAGE

```javascript
npm install // Installs all of the dependencies.
```

```javascript
npm run build // Runs Webpack to build the engine and the game.
```

```javascript
npm run start // Runs Electron and launches the game window.
```

## LIBRARIES

My initial idea is to use as many existing libraries as possible instead of having to reinvent the wheel. After seeing Noel's work on Skytorn and Celeste, I know his engine is going to be amazing.
However, this project is more of a learning tool for me and a challenging experiment to see how polished of an engine I can write using existing code that is typically meant for web development.


### NOTE: *(The items in this list are only possible additions to the engine. Thanks to all of the authors and contibutors of each of these for your hard work and contributions.)*
* [Electron](http://electron.atom.io/) - Build cross platform desktop apps with JavaScript, HTML, and CSS.
* [WebGL](https://github.com/KhronosGroup/WebGL) - HTML5 implimentation of OpenGL in the browser.
* [glMatrix](http://glmatrix.net/) - glMatrix is designed to perform vector and matrix operations stupidly fast!
* [Co](https://github.com/tj/co) - Generator based control flow goodness for nodejs and the browser, using promises, letting you write non-blocking code in a nice-ish way. Using this for  **Coroutines**. Here is a good article explaining Javascript coroutines: [Promise-Based Coroutines in Node.js](http://tobyho.com/2015/12/27/promise-based-coroutines-nodejs/)
* [socket.io](http://socket.io/) - Socket.IO enables real-time bidirectional event-based communication.
* [Webpack](https://webpack.js.org) - A tool to build JavaScript modules in your application.
* [Lodash](https://lodash.com/) - A modern JavaScript utility library delivering modularity, performance & extras.
* [Babel](https://babeljs.io/) - The compiler for writing next generation JavaScript.
* [Pixi.js](http://www.pixijs.com/) - Create beautiful digital content with the fastest, most flexible 2D WebGL renderer. **MAYBE...**
* [Quill.js](https://quilljs.com/) - Quill is a modern rich text editor built for compatibility and extensibility. Just in case we need text editing capabilities.
* [Mocha](https://mochajs.org/) - Simple, flexible, fun javascript test framework.
* [Passport](http://passportjs.org/) - Simple, unobtrusive authentication library.
* [nodemon](https://nodemon.io) - Monitor for any changes in your node.js application and automatically restart the server.
* [Particles.js](http://vincentgarreau.com/particles.js/) - A lightweight JavaScript library for creating particles.
* [Mousetrap](https://craig.is/killing/mice) - Simple library for handling keyboard shortcuts in Javascript. You never know...
* [Howler.js](https://howlerjs.com/) - howler.js makes working with audio in JavaScript easy and reliable across all platforms.
* [markdown-js](https://github.com/evilstreak/markdown-js) - A Markdown parser for javascript.
* [Lettering.js](http://letteringjs.com/) - A lightweight, easy to use Javascript injector for radical Web Typography.
* [Math.js](http://mathjs.org/) - An extensive math library for JavaScript and Node.js.
* [Messenger](http://github.hubspot.com/messenger/) - Growl-style alerts and messages for your app.
* [Tween.js](https://github.com/tweenjs/tween.js) - Javascript tweening engine.
* [RethinkDB](https://rethinkdb.com/) - The open-source database for the realtime web.
* [Jasmine](http://jasmine.github.io/) - DOM-less simple JavaScript testing framework. Another possible test library.
* [Matter.js](http://brm.io/matter-js/) - Matter.js is a 2D physics engine for the web.

## License

[MIT](https://github.com/babel/babel/blob/master/LICENSE)
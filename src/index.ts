import * as _ from 'lodash';
import { Application, Loader, LoaderResource, Sprite } from 'pixi.js';

import './style.css';
import catPNG from './images/cat.png'

function component() {
    const element = document.createElement('div');

    // Lodash, now imported above
    element.innerHTML = _.join(['Hello', 'webpack', 'TypeScript and PixiJS and Hot Reloading!'], ' ');
    element.classList.add('hello');

    //Create a Pixi Application
    let app = new Application({ width: 256, height: 256 });
    app.renderer.backgroundColor = 0x061639;

    // Cause full screen
    app.renderer.view.style.position = "absolute";
    app.renderer.view.style.display = "block";
    // (app.renderer as unknown as any).autoResize = true; // ew!!!!!
    app.renderer.resize(window.innerWidth, window.innerHeight);

    //Add the canvas that Pixi automatically created for you to the HTML document
    document.body.appendChild(app.view);

    //load an image and run the `setup` function when it's done
    app.loader
        .add(catPNG)
        .load(setup);

    let cat: Sprite;

    //This `setup` function will run when the image has loaded
    function setup() {

        //Create the cat sprite
        cat = new Sprite(app.loader.resources[catPNG].texture);

        cat.position.set(50, 60);
        cat.rotation = Math.PI / 3;
        cat.anchor.set(0.5, 0.5);

        //Add the cat to the stage
        app.stage.addChild(cat);

        app.ticker.add(d => gameLoop(d))
    }

    function gameLoop(delta: number) {
        cat.rotation += 0.01;
    }

    return element;
}

document.body.appendChild(component());
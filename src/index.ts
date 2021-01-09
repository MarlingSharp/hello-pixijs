import * as _ from 'lodash';
import * as PIXI from 'pixi.js';

import './style.css';
import catPNG from './images/cat.png'

function component() {
    const element = document.createElement('div');

    // Lodash, now imported above
    element.innerHTML = _.join(['Hello', 'webpack', 'TypeScript and PixiJS and Hot Reloading!'], ' ');
    element.classList.add('hello');

    //Create a Pixi Application
    let app = new PIXI.Application({ width: 256, height: 256 });
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

    //This `setup` function will run when the image has loaded
    function setup() {

        //Create the cat sprite
        let cat = new PIXI.Sprite(app.loader.resources[catPNG].texture);

        //Add the cat to the stage
        app.stage.addChild(cat);
    }

    return element;
}

document.body.appendChild(component());
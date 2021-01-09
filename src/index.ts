import * as _ from 'lodash';
import * as PIXI from 'pixi.js';

import './style.css';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported above
    element.innerHTML = _.join(['Hello', 'webpack', 'TypeScript and PixiJS and Hot Reloading!'], ' ');
    element.classList.add('hello');

    //Create a Pixi Application
    let app = new PIXI.Application({ width: 256, height: 256 });
    app.renderer.backgroundColor = 0x061639;

    //Add the canvas that Pixi automatically created for you to the HTML document
    document.body.appendChild(app.view);

    return element;
}

document.body.appendChild(component());
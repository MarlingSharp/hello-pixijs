import _ from 'lodash';

import './style.css';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported above
    element.innerHTML = _.join(['Hello', 'webpack', 'TypeScript!'], ' ');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
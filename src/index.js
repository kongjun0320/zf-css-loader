const modulesCss = require('./modules.css');

const div = document.createElement('div');
div.className = modulesCss.locals.background;

document.body.appendChild(div);

console.log(modulesCss);

//require scss file, and webpack will compile it to css.
//or just require css file.
// require('./css/main.css');
require('./sass/main.scss');

var header = require('./modules/header');
var footer = require('./modules/footer');

var content = document.createElement('div');
content.className = 'content';
content.innerHTML = 'Hello World';
var child = content.childNodes[0];
content.insertBefore(header, child);
content.appendChild(footer);

document.body.appendChild(content);

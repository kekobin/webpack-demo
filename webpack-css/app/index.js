//require scss file, and webpack will compile it to css.
//放在最外面引入有效
//or just require css file.
// require('./css/main.css');
require('./sass/main.scss');
require(['./modules/header.js', './modules/footer.js'], function(header,
  footer) {
  //放在内层引入无效
  // require('./css/main.css');

  var content = document.createElement('div');
  content.className = 'content';
  content.innerHTML = 'Hello World';
  var child = content.childNodes[0];
  content.insertBefore(header, child);
  content.appendChild(footer);

  document.body.appendChild(content);
});

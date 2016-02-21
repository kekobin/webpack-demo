require(['./modules/header.js', './modules/footer.js'], function(header,
  footer) {
  //require scss file, and webpack will compile it to css.
  require('./sass/main.scss');
  //or just require css file.
  // require('./css/main.css');

  var content = document.createElement('div');
  content.className = 'content';
  content.innerHTML = 'Hello World';
  var child = content.childNodes[0];
  content.insertBefore(header, child);
  content.appendChild(footer);

  document.body.appendChild(content);
});

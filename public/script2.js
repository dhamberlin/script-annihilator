(() => {
  const node = document.createElement('div');
  node.innerHTML = `<p>Greetings from script 2</p>`;
  document.querySelector('#script-container').appendChild(node);
})()
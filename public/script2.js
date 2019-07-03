(() => {
  const node = document.createElement('div');
  node.innerHTML = 'Greetings from script 2';
  document.querySelector('#script-container').appendChild(node);
})()
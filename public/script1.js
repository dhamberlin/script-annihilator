(() => {
  const scriptBodyContents = document.currentScript.innerHTML;
  const { data } = JSON.parse(scriptBodyContents);
  console.log({ data })
  const node = document.createElement('div');
  const dataAppend = data ? `<br>Appended data: ${data}` : '';
  node.innerHTML = `Greetings.${dataAppend}`;
  document.querySelector('#script-container').appendChild(node);
})()
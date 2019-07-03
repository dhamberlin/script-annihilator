import React, { Component } from 'react';

const SCRIPT_URLS = ['/script1.js', '/script2.js', '/script3.js']

export default class UnifiedSwitcher extends Component {

  componentDidMount() {
    this.appendNewScript(0);
  }

  componentWillUnmount() {
    // This is not actually necessary in this case.
    // On unmount, the component's root node will be
    // removed from the DOM, and with it, its children.
    // But in general, this is a good place to clean up,
    // kill subscriptions, etc.
    // Especially when breaking the model of
    // "React owns DOM manipulation and event listeners"
    this.node.innerHTML = '';
  }

  appendNewScript = (scriptId) => {
    this.scriptId = scriptId;
    this.script = document.createElement('script');
    this.script.type = 'text/javascript';
    this.script.src = SCRIPT_URLS[scriptId];
    this.node.appendChild(this.script);
  }

  setScript = (scriptId) => {
    if (scriptId !== this.scriptId) {
      this.node.innerHTML = '';
      this.appendNewScript(scriptId);
    }
  }

  setRef = (node) => {
    this.node = node;
  }

  render() {
    return (
      <div className='container'>
        <div className='button-wrap'>
          <button onClick={() => this.setScript(0)}>Script 1</button>
          <button onClick={() => this.setScript(1)}>Script 2</button>
          <button onClick={() => this.setScript(2)}>Script 3</button>
        </div>
        <div>
          <div
            id='script-container'
            ref={this.setRef}
          />
        </div>
      </div>
    )
  }
}
import React, { Component } from 'react';

export default class ScriptSwitcher extends Component {

  componentDidMount() {
    this.newScript();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.scriptUrl !== this.props.scriptUrl) {
      this.node.innerHTML = '';
      this.newScript();
    }
  }

  newScript = () => {
    this.script = document.createElement('script');
    this.script.type = 'text/javascript'
    this.script.src = this.props.scriptUrl
    this.node.appendChild(this.script);
  }

  setRef = (node) => {
    this.node = node;
  }

  render() {
    return (
      <div
        id='script-container'
        ref={this.setRef}
      />
    )
  }
}
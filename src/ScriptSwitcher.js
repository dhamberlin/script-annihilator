import React, { Component } from 'react';

export default class ScriptSwitcher extends Component {

  componentDidMount() {
    this.appendNewScript();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.scriptUrl !==this.props.scriptUrl ||
      prevProps.data !== this.props.data
      ) {
      this.node.innerHTML = '';
      this.appendNewScript();
    }
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

  appendNewScript = () => {
    this.script = document.createElement('script');
    this.script.type = 'text/javascript'
    this.script.src = this.props.scriptUrl
    this.script.innerHTML = JSON.stringify({ data: this.props.data })
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
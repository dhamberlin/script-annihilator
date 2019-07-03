import React, { Component } from 'react';
import ScriptSwitcher from './ScriptSwitcher';

const SCRIPT_URLS = ['/script1.js', '/script2.js', '/script3.js']

export default class WidgetContainer extends Component {
  state = {
    scriptId: 0
  }

  setScript = (scriptId) => {
    this.setState({ scriptId });
  }

  render() {
    const scriptUrl = SCRIPT_URLS[this.state.scriptId];
    return (
      <div className='container'>
        <div className='button-wrap'>
          <button onClick={() => this.setScript(0)}>Script 1</button>
          <button onClick={() => this.setScript(1)}>Script 2</button>
          <button onClick={() => this.setScript(2)}>Script 3</button>
        </div>
        <div>
          <ScriptSwitcher scriptUrl={scriptUrl} />
        </div>
      </div>
    )
  }
}
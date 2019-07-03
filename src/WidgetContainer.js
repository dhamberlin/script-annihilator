import React, { Component } from 'react';
import ScriptSwitcher from './ScriptSwitcher';

const SCRIPT_URLS = ['/script1.js', '/script2.js', '/script3.js']

export default class WidgetContainer extends Component {
  state = {
    scriptId: 0,
    data: ''
  }

  setScript = (scriptId) => {
    this.setState({ scriptId });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.input.value;
    this.setState({ data });
  }

  setInputRef = node => {
    this.input = node;
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
        <form
          className="data-form"
          onSubmit={this.handleSubmit}
        >
          <input
            ref={this.setInputRef}
            type='text'
            placeholder='Enter data to be appended here'
          />
          <button formAction='submit'>Set</button>
        </form>
        <div>
          <ScriptSwitcher scriptUrl={scriptUrl} data={this.state.data} />
        </div>
      </div>
    )
  }
}
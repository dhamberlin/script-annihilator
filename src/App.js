import React from 'react';
import './App.css';
import WidgetContainer from './WidgetContainer';
import UnifiedSwitcher from './UnifiedSwitcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*
          Uncomment your preferred component.
          Same behavior, mostly same code.

          UnifiedSwitcher: simpler and self-contained
          WidgetContainer/ScriptSwitcher: demos how we might abstract out
            the logic for replacing the script into its own component,
            using a url provided via props.
        */}
        <WidgetContainer />
        {/* <UnifiedSwitcher /> */}
      </header>
    </div>
  );
}

export default App;

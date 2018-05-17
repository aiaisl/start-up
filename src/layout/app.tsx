import Simple from 'app/simple/simple';
import * as React from 'react';
import './styles/App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React 3</h1>
        </header>
        <p className="App-intro">
          <Simple />
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

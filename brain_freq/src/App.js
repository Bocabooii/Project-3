import logo from './logo.svg';
import './index.css'; 
import './styles/index.css'; 
import './styles/custom-progress-bar.css';
import './styles/cosmic-animations.css';
import './styles/brain-freq-styles.css';
import './App.css';

function App() {
  return (
    <div className="app-body">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

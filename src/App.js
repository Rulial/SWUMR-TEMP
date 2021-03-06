import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SWUMR </p>
         <code> \ pronounced like summer </code>
        
        <p>
        <a
          className="App-link"
          href="https://pathintegral.substack.com/p/swumr-pi0-protocol?sd=pf"
          target="_blank"
          rel="noopener noreferrer"
        >
          TECHNICAL PAPER
        </a> </p>
       <p> <a
          className="App-link"
          href="https://path-integral.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        PI0
        </a> </p>
      </header>
    </div>
  );
}

export default App;

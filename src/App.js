// import logo from './logo.svg';
import logo from './assets/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <p>
         We're excited to serve our excellent services to help & grow your business
        </p>
        <a
          className="App-link"
          href="https://www.umairghufran.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </header>
    </div>
  );
}

export default App;

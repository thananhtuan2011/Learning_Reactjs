import logo from './logo.svg';
import './App.css';
function __hellowrod(props) {
  console.log("ffff", props.text)
  return (
    <span>
      {props.text}
    </span>

  )

}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <__hellowrod text="Tôi là tuấn đây"></__hellowrod>
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

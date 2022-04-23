import logo from './logo.svg';
import './App.css';
import FirstComponent from './Components/FirstComponent';

function App() {
  const menu = [<li>un</li>, <li>deux</li>, <li>trois</li>];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
             <FirstComponent />
          <ul> {menu}
          </ul>
       
      </header>
    </div>
  );
}

export default App;

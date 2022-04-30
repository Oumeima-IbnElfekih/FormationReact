import logo from './logo.svg';
import './App.css';

import FunctionalComponent from './Components/FunctionalComponent';
import ClassComponent from './Components/ClassComponent';

function App() {
  // const menu = [<li>un</li>, <li>deux</li>, <li>trois</li>];
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <FirstComponent />
         <EcmaScriptComponent />  */}
          {/* <FunctionalComponent name="Mohamed" prenom="ben mohamed" /> */}
          <ClassComponent name="Mohamed" prenom="ben mohamed"/>
      </header>
     
    </div>
  );
}

export default App;

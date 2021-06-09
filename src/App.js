import logo from './logo.svg';
import './App.css';
import './resetCSS.css';
/*import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)*/


function App() {
  return (
    <div className="App">
     <p>Todos</p>
     <div className="submit-input">
       <input className="input"></input>
       <button>Submit</button>
     </div>
     <div className="items">
       <ul>
         <li>sdfsdf</li>
         <li>sdfsdf</li>
         <li>sdfsdf</li>
         <li>sdffddf</li>
       </ul>
     </div>
    </div>
  );
}

export default App;

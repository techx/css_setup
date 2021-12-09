import './App.css';

import john from './assets/john.png';
import ani from './assets/ani.png';
import gnat from './assets/gnat.png';

function App() {
  return (
    <div id="wrapper">
        <div className="person">
          <img src={gnat} alt="hooman" />
        </div>
        
        <div className="person">
          <img src={john} alt="hooman" />
        </div>
        
        <div className="person">
          <img src={ani} alt="hooman" />
        </div>
    </div>
  );
}

export default App;

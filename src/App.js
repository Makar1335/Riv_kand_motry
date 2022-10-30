import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Char from './pages/characters/characters';

function App() {
  return (
    <div className="App">
      <Char></Char>
    </div>
  );
}

export default App;
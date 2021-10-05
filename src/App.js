import React from 'react';
import './components/style.css';
import Text from './components/Text';
import Home from './components/Home';
import Header from './components/Header';
import {BrowserRouter as Router , Route} from 'react-router-dom';


function App() {
  return (
    <Router className="App">
      <Header />
      <Route path='/Home' exact component= {Home} />
      <Route path='/TodoApp' exact component= {Text} />
    </Router> 
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent'
import Custom from './components/Custom'
import StateDemo from './components/StateDemo'
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Custom name="World"/>
        <StateDemo></StateDemo>
        <ClassComponent name="Universe"/>
        <Counter />
      </header>
    </div>
  );
}

export default App;

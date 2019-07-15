import React from 'react';
import logo from './logo.svg';
import './App.css';

import Accordion from './components/Accordion'; 

function App() {
  return (
    <div className="App">
      <Accordion heading="heading 1" content="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptas repellat illum? Hic repellendus tempora alias ipsam culpa vel!
      </Accordion>
    </div>
  );
}

export default App;

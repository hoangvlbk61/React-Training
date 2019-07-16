import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) { 
    super(props) ; 
    this.inputElement = React.createRef(); 

    this.formElement = React.createRef();
    
    this.resetInput = this.resetInput.bind(this) ;
    // setTimeout(() => this.inputElement.current.focus(), 2000) ;
  }

  resetInput() {
    this.inputElement.current.value = "" ;
    // this.formElement.current.reset() ; 
  }

  componentDidMount() { 
    this.inputElement.current.focus(); 
  }
  
  render() {
    return (
      <div className="App">
         <form action="" method="get">
         <input type="text" ref={this.inputElement}/> 
         <input type="button" value="Reset"
         onClick={this.resetInput}
         />
         </form>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import Counter from './components/Counter.js' ;
  
import './App.css';

class App extends Component {
  
  constructor(props) { 
    super(props) ; 
    this.state = { 
      showCounter: true 
    }
  }
  
  componentDidMount() { 
    console.log("App mount ") ; 
  }

  componentDidUpdate() { 
    console.log("App update") ; 
  }

  componentWillUnmount() { 
    console.log("App will unmount") ; 
  }

  removeCounter() { 
    this.setState({ 
      showCounter: !this.state.showCounter
    })
  }

  render() { 
    return (
      <div className="App">
        <button onClick={()=> this.removeCounter()}> Remove Counter</button>
      {this.state.showCounter && <Counter/> }
      </div>
    );
  }
}

export default App;

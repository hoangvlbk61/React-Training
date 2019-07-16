import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import tick from './img/tick.svg';
class App extends Component{
  constructor(){
    super() ; 
    this.state = {
      titles: [
        { 'title':'Bài này chill phết', isCompleted: true }, 
        { 'title':'Lầu 20' , isCompleted: false},
        { 'title':'Đi Đi Đi' , isCompleted: false },
      ]
    };
    this.onItemClicked = this.onItemClicked.bind(this) ; 
    this.onKeyUp = this.onKeyUp.bind(this) ; 
    this.onCheckAllClicked = this.onCheckAllClicked.bind(this) ; 
    console.log(this.state);
  }

  onCheckAllClicked() { 
    let { titles }= this.state ;
    let { titles: newTitles} = this.state ; 
    let uncheckedIndexItem = newTitles.filter( (element) => element.isCompleted===false ).length;
    console.log(uncheckedIndexItem) ; 
    if(uncheckedIndexItem > 0) 
    {
      titles.map((element) => element.isCompleted = true ) ;   
      this.setState({
        titles: titles, 
      })
    }
    else { 
      titles.map((element) => element.isCompleted =  false) ;   
      this.setState({
        titles: titles, 
      })
    }
  } 

  onKeyUp(event) { 
    if(event.keyCode.toString() !== "13") 
      return ; 
    // console.log(event);
    let text = event.target.value ; 
    text = text.trim() ; 
    if(!text || text === '') 
      return ; 
    this.setState({
      titles: [
        {
          title: text, 
          isCompleted: false,
        },
        ...this.state.titles, 
      ]
    }); 
    
    event.target.value = "" ;

  }

  onItemClicked(item, index) {
    console.log("access to onItemClicked ! ", index, " ", item) ;
    var isCompleted = item.isCompleted ;
    var newItem = Object.assign({},item);
    newItem.isCompleted = !isCompleted ;
    console.log("item is: ", item); 
    console.log("new item is: ", newItem);   
    const {titles} = this.state ; 
    this.setState({
      titles: [
        ...titles.slice(0,index),
        {
          ...item, 
          isCompleted: !isCompleted  
        }, 
        ...titles.slice(index+1) 
      ]
    });
  }

  render(){ 
    // const { titles: todoItems} = this.state.titles ; 
    // console.log("To do list is: " + todoItems) ; 
    if(this.state.titles.length > 0 ) 
    {
      console.log("To do list.length" + this.state.titles.length) ; 
      return (
      <div className="App">
        <div className="Header">
          <img src={tick} alt="tickk" width={32} onClick={this.onCheckAllClicked}/>
          <input type="text" name="newTask" id="" height={32}
            placeholder="Add a new item" onKeyUp={this.onKeyUp} 
          />
        </div>
        {
          this.state.titles.length > 0 && this.state.titles.map(
            (item, index) => <TodoList 
              key={index} 
              item={item} 
              onclick={()=> this.onItemClicked(item, index)}
              />)
        }
      </div>
      );
    }
    else { 
      return(
        <div className="App">
          <h1> you do not have any item now ! </h1>
      </div>
      )
    }
  }

}

export default App;

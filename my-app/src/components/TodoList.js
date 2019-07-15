import React, { Component }  from 'react';
import './TodoList.css';
import checkImg from '../img/check.svg'; 
import unCheckImg from '../img/uncheck.svg';

class TodoList extends Component {
    
    render()
    {
        const { item, onclick } = this.props ; 
        let url = unCheckImg ; 
        if(item.isCompleted) 
            url = checkImg ; 
        return(
            <div className={item.isCompleted?'TodoList TodoList-done':'TodoList'}>
                <img src={url} alt="" onClick={onclick}/>
                    <source/>
                <p>
                        Item: {this.props.item.title}
                </p>
            </div>
        ); 
    }
}

export default TodoList ; 
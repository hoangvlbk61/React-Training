import React, { Component }  from 'react';
import PropTypes from 'prop-types';

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

// PROP TYPES DECLARATIONG

TodoList.propTypes = { 
    item: PropTypes.shape({
        title: PropTypes.string.isRequired, 
        isCompleted: PropTypes.bool.isRequired,
    }), 
    onclick: PropTypes.func.isRequired,
}

export default TodoList ; 
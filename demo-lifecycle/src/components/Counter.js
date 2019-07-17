import React, {Component} from 'react' 

class Counter extends Component { 
    
    constructor(props) 
    { 
        super(props) ; 
        this.state = {
            count: 0  
        }
        this.decreaseBtn = this.decreaseBtn.bind(this) ; 
        this.increaseBtn = this.increaseBtn.bind(this) ;
    }

    decreaseBtn() { 
        this.setState({
            count: this.state.count - 1 
        })
    }

    increaseBtn() { 
        this.setState({ 
            count: this.state.count + 1
        })
    }

    componentDidMount() { 
        console.log("Counter Did Mount") ; 
    }

    componentDidUpdate() { 
        console.log("Conponent did update") ; 
    }

    componentWillUnmount() { 
        console.log("Conponen will be unmount") ; 
    }

    componentWillUpdate() { 
        console.log("Component will be updated") ; 
    }

    render() 
    { 
        const count = this.state.count ; 
        return (
            <div className="Counter">
                <button onClick={this.decreaseBtn}> - </button> 
                <span>{count}</span>
                <button onClick={this.increaseBtn}> + </button> 
            </div>
        ) ; 
    }
}

export default Counter ; 
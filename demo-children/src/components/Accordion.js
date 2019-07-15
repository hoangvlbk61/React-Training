import React, {Component} from 'react' ; 

class Accordion extends Component { 
    constructor(props) { 
        super(props) ; 
        this.state = { 
            isCollapsed: true
        };
        this.onClick = this.onClick.bind(this) ;
    }

    onClick() { 
        this.setState({
            isCollapsed: !this.state.isCollapsed 
        })
    }

    render() {
        const {heading, content, children} = this.props ; 
        const {isCollapsed} = this.state ; 
        console.log(content) ;
        return (
            <div className="Accordion">
                <div className="heading" onClick={this.onClick}>
                    <h2>{heading}</h2> 
                </div>
                
                {!isCollapsed && <div className="content"> {content} {children} </div> }
            </div>
            
        );
    }
}

export default Accordion ; 
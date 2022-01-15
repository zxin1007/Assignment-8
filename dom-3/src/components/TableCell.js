import React from 'react';

class TableCell extends React.Component {

    constructor(props){
        super(props)
        this.state=
            {
                backgroundColor:""
            }

        this.handleClick = this.handleClick.bind(this)
        this.handleMouseDown = this.handleMouseDown.bind(this)
        // this.handleMouseUp = this.handleMouseUp.bind(this)
        this.onMouseOver = this.onMouseOver.bind(this)
    }

    handleClick() {
        this.setState({backgroundColor:this.props.color})
    }

    handleMouseDown(){
        this.setState({backgroundColor:this.props.color})
    }

    onMouseOver(event){
        if (event.buttons === 1)
        this.setState({backgroundColor:this.props.color})
    }

    render(){
        return  <div style={{backgroundColor: this.state.backgroundColor}} 
                    className='box' 
                    onClick={this.handleClick}
                    onMouseDown={this.handleMouseDown}
                    // onMouseUp={this.handleMouseUp}
                    onMouseOver={(event)=>this.onMouseOver(event)}
                    >
                </div>
    }

}

export default TableCell
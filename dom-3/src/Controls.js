import React from "react"

class Controls extends React.Component{


    render(){
        
        return(
            <div className="controls">
                <button className="control" onClick={()=>this.props.onClick("row", +1)} >Add Row</button>
                <button className="control"onClick={()=>this.props.onClick("row", +10)} >+10</button>
                <button className="control" onClick={()=>this.props.onClick("row", -1)}>Remove Row</button>
                <button className="control" onClick={()=>this.props.onClick("row", -10)}>-10</button>
                <div className="empty">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</div>
                <button className="control" onClick={()=>this.props.onClick("column", +1)} >Add Column</button>
                <button className="control" onClick={()=>this.props.onClick("column", +10)}>+10</button>
                <button className="control" onClick={()=>this.props.onClick("column", -1)}>Remove Column</button>
                <button className="control" onClick={()=>this.props.onClick("column", -10)}>-10</button>
                <div className="empty">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</div>
                <button className="control">Colors</button>
                <button className="control">Fill Empties</button>
                <button className="control">Fill All</button>
                <button className="control">Clear All</button>
            </div>
        )
    }
}

export default Controls
import React from "react"

class Controls extends React.Component{
    render(){
        return(
            <div className="controls">
                <button className="control">Add Row</button>
                <button className="control">+10</button>
                <button className="control">Remove Row</button>
                <button className="control">-10</button>
                <button className="control">Add Column</button>
                <button className="control">+10</button>
                <button className="control">Remove Column</button>
                <button className="control">-10</button>
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
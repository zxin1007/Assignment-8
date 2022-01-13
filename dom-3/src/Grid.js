import { render } from "@testing-library/react"
import React from "react"

class Grid extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <>
        <div className="grid-container">
            <button className="cell"></button>
            <button className="cell"></button>
            <button className="cell"></button>
            <button className="cell"></button>
        </div>
        </>
        )
    }
}

export default Grid
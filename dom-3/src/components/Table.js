import React from 'react';
import TableRow from "./TableRow"

class Table extends React.Component {

    constructor(props){
        super(props)
    }

    render(){

        // console.log(this.props.column)
        // console.log(this.props.row)

        const row = []
        for (let i=0; i<this.props.row;i++){
            row.push(<TableRow key={i} column={this.props.column} />)
        }

        return  <div className='main'>
                    <div className="grids">
                        {row}
                    </div>
                </div>
    }

}


export default Table
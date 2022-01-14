import React from 'react';

class TableRow extends React.Component {

    render(){

        console.log(this.props.column)
        const display = []
        for (let i=0; i<this.props.column; i++){
            display.push(<div key={i} className='box'></div>)
        }

        return  <div className='row'>
                    {display}
                </div>
    }

}

export default TableRow
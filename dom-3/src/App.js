import './App.css';
import Controls from './Controls';
import React from 'react';
import Table from "./components/Table"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      column:5,
      row:4
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(item, count) {
      console.log(item)
      console.log(3+count)
  }

  render(){

    return (
      <>
        <main>
          <Controls
              onClick={this.handleClick}
          />
        </main>
        <Table 
            column={this.state.column}
            row={this.state.row}
        />
      </>
    );
  }
}

export default App;

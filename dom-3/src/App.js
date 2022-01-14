import './App.css';
import Controls from './Controls';
import React from 'react';
import Table from "./components/Table"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      column:0,
      row:0
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(item, count) {
      console.log(item)
      console.log(count)
      if (item==="row"){
        if (this.state.row===0 && this.state.column===0 && count>0){
          this.setState({column:1, row:1})
        }else if (this.state.row+count>0){
          this.setState({...this.state, row:this.state.row+count})
        } else{
          this.setState({column:0, row:0})
        }
      } else{
        if (this.state.row===0 && this.state.column===0 && count>0){
          this.setState({column:1, row:1})
        }else if (this.state.column+count>0){
          this.setState({...this.state, column:this.state.column+count})
        } else{
          this.setState({column:0, row:0})
        }
      }
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

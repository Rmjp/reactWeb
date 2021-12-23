import react from 'react';
import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';

class Count extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counts : 0,
      st : "ON"
      };
    this.toggle_button = this.toggle_button.bind(this);
  }

  componentDidMount(){
    this.run = setInterval(()=>this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.run);
  }

  tick(){
    this.setState((x)=>({counts:x.counts+1}));
  }

  toggle_button(){
    this.setState((x)=>({st:(x.st==="ON")?"OFF":"ON"}));
    if(this.state.st === "ON"){
      this.componentWillUnmount();
    }
    else{
      this.componentDidMount();
    }
  }

  render(){
    return (
      <div>
        <h1>counts = {this.state.counts}</h1>
        <button onClick={this.toggle_button}> {this.state.st} </button>
      </div>
    )
  }
}

ReactDOM.render(<Count  />, document.getElementById('root'));
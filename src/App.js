import React, {Component} from 'react';
import './App.css';

let Navigation = ()=> {
  return (
          <div className="Nav">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
          </div>
        );
};

let Content = (props)=> {
    // console.log(props);
  return (
          <div className="Content">
            <h1>Table Title</h1>
            <input value={props.name} onChange={props.nameChangeHandler}/>
          </div>
        );
};


class App extends Component {
  state = {name:'Mizan'};
  onNameChangeHandler = (event)=>{
    let name = event.target.value;
    this.setState({name:name});
    
  }
  render() {
    console.log("Rendering ",this.state);
    return (
      <div className="App">
        <Navigation/>
        <Content name={this.state.name} nameChangeHandler={this.onNameChangeHandler.bind(this)}/>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default App;

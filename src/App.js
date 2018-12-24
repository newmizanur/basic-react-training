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
            <h2>
                Its a long table {props.name}
            </h2>
          </div>
        );
};


class App extends Component {
  state = {name:'Mizan'};
  onTitleChangeHandler = (event)=>{
    let name = event.target.value;
    this.setState({name:name});
    
  }
  render() {
    console.log("Rendering ",this.state);
    return (
      <div className="App">
        <Navigation/>
        <Content name={this.state.name}/>
        <input value={this.state.name} onChange={this.onTitleChangeHandler}/>
      </div>
    );
  }
}

export default App;

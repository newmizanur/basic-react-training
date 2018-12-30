import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";


let Navigation = ()=> {
  return (
          <div className="Nav">
            <ul>
                <li>
                    <Link to="/">Root</Link>
                </li>
                <li>
                <Link to="/content2">Go Content2</Link>
                </li>
                <li>Contact Us</li>
            </ul>
          </div>
        );
};

let Content = (props)=> {
    console.log(props);
  return (
          <div className="Content">
            <h1>{props.header}</h1>
            {/* <input value={props.name} onChange={props.nameChangeHandler}/> */}
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
      <BrowserRouter>
            <div className="App">
              <Navigation/>
              <Route path="/" exact render={(props)=> <Content {...props} name={this.state.name} nameChangeHandler={this.onNameChangeHandler.bind(this)} header={'Root Page'}/>}/>
              <Route path="/content2" render={(props)=> <Content {...props} name={this.state.name} nameChangeHandler={this.onNameChangeHandler.bind(this)} header={'Content 2'}/>}/>
              <h1>{this.state.name}</h1>
            </div>
      </BrowserRouter>

    );
  }
}

export default App;

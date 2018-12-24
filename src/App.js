import React from 'react';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello world</h1>
//       </div>
//     );
//   }
// }

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
    console.log(props);
  return (
          <div className="Content">
            <h1>Table Title</h1>
            <div>
                Its a long table {props.name}
            </div>
          </div>
        );
};

let App = ()=> {
  return (
          <div className="App">
            <Navigation/>
            <Content name="Mizan"/>
          </div>
        );
};

export default App;

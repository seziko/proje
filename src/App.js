import React, {Component} from 'react';
import './App.css';
import './bootstrap.css';
import FoodApp from "./Component/food/FoodApp";

class App extends Component{
  render() {
    return (
        <div className="App">
          <FoodApp/>
        </div>
    );
  }
}

export default App;

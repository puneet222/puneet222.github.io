import React, { Component } from 'react';
// import SelectedFoods from './SelectedFoods';
// import FoodSearch from './FoodSearch';
import Home from './Home' ;

class App extends Component {
  oldState = {
    selectedFoods: [],
  }

  state = {
    current : "home",
  }

  // removeFoodItem = (itemIndex) => {
  //   const filteredFoods = this.oldState.selectedFoods.filter(
  //     (item, idx) => itemIndex !== idx,
  //   );
  //   this.setState({ selectedFoods: filteredFoods });
  // }
  //
  // addFood = (food) => {
  //   const newFoods = this.oldState.selectedFoods.concat(food);
  //   this.setState({ selectedFoods: newFoods });
  // }

  render() {
    // const { selectedFoods } = this.oldState;

    return (
      <div className='App'>
        <div className="fullscreen-bg">
          <video loop muted autoPlay className="fullscreen-bg__video">
              <source src="https://www.dropshots.com/video.php?u=https%3A%2F%2Fstorage04.dropshots.com%2Fphotos6000%2Fphotos%2F1388321%2F20170506%2F070642.mp4" type="video/mp4" />
          </video>
        </div>
        <div className='ui text container'>
          <Home />
        </div>
        <div className="ui menu" id="footer">
          <div className="fitted item">
            No padding whatsoever
          </div>
          <div className="horizontally fitted item">
            No horizontal padding
          </div>
          <div className="vertically fitted item">
            No vertical padding
          </div>
        </div>
      </div>
    );
  }
}

export default App;

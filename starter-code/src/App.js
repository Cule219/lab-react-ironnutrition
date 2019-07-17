import React, { Component } from 'react';
import './App.css';
import foodsJson from './foods.json'
import FoodBox from './Components/FoodBox';
import "bulma/css/bulma.css"
import FoodForm from './Components/FoodForm';
import ToggleButton from './Components/ToggleButton';

class App extends Component {
  state = {
    foods: foodsJson,
    clicked: true
  }

  toggleAddFood = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  addFood = food => {
    let foodCopy = [...this.state.foods]
    foodCopy.unshift(food)
    this.setState({foods: foodCopy}) 
  }
  
  render() {

    let foodsfoods = this.state.foods.map((x) => {
      return <FoodBox data={x}/>
    } ) 
    if(this.state.clicked)
    return (
      <div>
        <h1 className="title is-1">IronNutrition</h1>
        {/* <FoodForm addFood={this.addFood}/> */}
        <ToggleButton clickMe={this.toggleAddFood}/>
        {foodsfoods}
      </div>
    );
    else
    return (
      <div>
        <h1 className="title is-1">IronNutrition</h1>
        <FoodForm clickMe={this.toggleAddFood} addFood={this.addFood}/>
        {/* <ToggleButton /> */}
        {foodsfoods}
      </div>
    );
  }
}

export default App;

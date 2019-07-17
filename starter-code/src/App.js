import React, { Component } from 'react';
import './App.css';
import foods from './foods.json'
import FoodBox from './Components/FoodBox';
import "bulma/css/bulma.css"
import FoodForm from './Components/FoodForm';


const foodsfoods =(foods)=> foods.map((x) => {
  return <FoodBox data={x}/>
} ) 

class App extends Component {
  state = {
    foods: foodsfoods(foods)
  }

  addFood = food => {
    let foodCopy = [...foods]
    foodCopy.unshift(food)
    this.setState({foods: foodsfoods(foodCopy)}) 
    console.log(foodCopy)
  }
  

  render() {
    return (
      <div>
        <h1 class="title is-1">IronNutrition</h1>
        <FoodForm addFood={this.addFood}/>
        {foodsfoods}
      </div>
    );
  }
}

export default App;

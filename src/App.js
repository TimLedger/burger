import React, { useState } from 'react';
import Ingredient from './components/Ingredient';
import Burger from './components/Burger';
import saladImage from './assets/saladImage.jpg';  
import cheeseImage from './assets/cheeseImage.jpg';  
import meatImage from './assets/meatImage.jpg';  
import baconImage from './assets/baconImage.jpg'; 
import './App.css';  
 
const INGREDIENTS = [
  { name: 'Салат', price: 10, image: saladImage },
  { name: 'Сыр', price: 50, image: cheeseImage },
  { name: 'Мясо', price: 80, image: meatImage },
  { name: 'Бекон', price: 60, image: baconImage },
];

function App() {
  const [ingredients, setIngredients] = useState(
    INGREDIENTS.map((ingredient) => ({ ...ingredient, count: 0 }))
  );

  const [totalPrice, setTotalPrice] = useState(30);

  const handleAddIngredient = (name) => {
    const updatedIngredients = [...ingredients];
    const ingredient = updatedIngredients.find((i) => i.name === name);
    ingredient.count++;
    setIngredients(updatedIngredients);
    setTotalPrice(totalPrice + ingredient.price);
  };

  const handleRemoveIngredient = (name) => {
    const updatedIngredients = [...ingredients];
    const ingredient = updatedIngredients.find((i) => i.name === name);
    if (ingredient.count > 0) {
      ingredient.count--;
      setIngredients(updatedIngredients);
      setTotalPrice(totalPrice - ingredient.price);
    }
  };

  const handleClearBurger = () => {
    setIngredients(ingredients.map((i) => ({ ...i, count: 0 })));
    setTotalPrice(30);
};
 
  return (
    <div className="app">
      <div className="ingredients">
        {ingredients.map((ingredient) => (
          <Ingredient
            key={ingredient.name}
            name={ingredient.name}
            count={ingredient.count}
            price={ingredient.price}
            image={ingredient.image}
            onAdd={() => handleAddIngredient(ingredient.name)}
            onRemove={() => handleRemoveIngredient(ingredient.name)}
          />
        ))}
      </div>
      <Burger
        ingredients={ingredients}
        totalPrice={totalPrice}
        onClear={handleClearBurger}
      />
    </div>
  );
}

export default App;

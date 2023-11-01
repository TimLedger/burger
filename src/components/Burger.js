import React from 'react';
import '../App.css';  

const Burger = ({ ingredients, totalPrice, onClear }) => {
  return (
    <div className="burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      <div className="Salad"></div>
      <div className="Cheese"></div>
      <div className="Meat"></div>
      <div className="BreadBottom"></div>
      <h2>Ваш бургер</h2>
      {ingredients.map((ingredient) => (
        <p key={ingredient.name}>
          {ingredient.name}: {ingredient.count}
        </p>
      ))}
      <p>Общая стоимость: {totalPrice} сом</p>
      <button onClick={onClear}>Очистить бургер</button>
    </div>
  );
};

export default Burger;

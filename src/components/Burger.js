import React from 'react';
 
const Burger = ({ ingredients, totalPrice, onClear }) => {
  return (
    <div className="burger">
      <div className="burgerImage">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {ingredients.map((ingredient) => ( 
          Array.from({ length: ingredient.count }).map((_, index) => (
            <div key={`${ingredient.name}-${index}`} className={ingredient.className}></div>
          ))
        ))}
        <div className="BreadBottom"></div> 
      </div>
      <div className="burgerInfo">
        <h2>Ваш бургер</h2>
        <p>Общая стоимость: {totalPrice} сом</p>
        <button onClick={onClear}>Очистить бургер</button>
      </div> 
    </div>
  );
};

export default Burger;


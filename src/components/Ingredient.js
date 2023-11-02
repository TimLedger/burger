import React from 'react';

const Ingredient = ({ name, count, price, image, onAdd, onRemove }) => {
  return (
    <div className="ingredient">
      <img src={image} alt={name} />
      <div className="ingredient-info">
        <h3>{name}</h3>
        <p>Цена: {price} сом</p>
        <div className="ingredient-btns">
        <button onClick={onAdd}>Добавить</button>
        <button onClick={onRemove}>Удалить</button>
        </div>
        <p>Количество: {count}</p>
      </div>
    </div>
  );
};

export default Ingredient;

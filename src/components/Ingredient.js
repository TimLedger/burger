import React from 'react';

const Ingredient = ({ name, count, price, image, onAdd, onRemove }) => {
  return (
    <div className="ingredient">
      <img src={image} alt={name} />
      <div className="ingredient-info">
        <p>{name}</p>
        <p>Цена: {price} сом</p>
        <button onClick={onAdd}>Добавить</button>
        <button onClick={onRemove}>Удалить</button>
        <p>Количество: {count}</p>
      </div>
    </div>
  );
};

export default Ingredient;

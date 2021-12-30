import React from 'react';
import './ingredients.scss'
import ingredients from '../../assets/images/ingredients/ingredients.png'

const Ingredients = () => {
  return (
    <div className="best-ingredients">
    <h1 className="fancy-text">Discover</h1>
    <h1 className="text-xl">The Best Ingridients</h1>
    <p> eveniet aut quas dolores saepe. Excepturi praesentium nemo ipsam aut quasi facilis!v Lorem ipsum dolor sit
      amet consectetur, adipisicing elit. Laudantium ea natus nam ut fugiat quibusdam nulla quasi maiores! Ipsum
      facere dolore omnis tempore nostrum ad laborum inventore, alias ea quisquam.</p>
    <img src={ingredients} alt=""/>
  </div>
  )
}

export default Ingredients;
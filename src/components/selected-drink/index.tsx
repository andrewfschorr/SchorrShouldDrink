import React from 'react';
import styled from 'styled-components';

import DrinkInterface from '../../interfaces/drink-interface';

const ImgWrapper = styled.div`
    flex: 0 0 60%;
    @media (min-width: 768px) {
      flex: 0 0 30%;
    }
`;


export default ({selectedDrink} : {selectedDrink: null | DrinkInterface}) => {
  if (selectedDrink === null) return null;
  return (
    <div className="flex">
    <ImgWrapper className="mr-6">
      <img className="mb-6 rounded" style={{maxWidth: '100%'}} src={selectedDrink.strDrinkThumb} alt=""/>
    </ImgWrapper>
    <div className="flex-grow">
      <h2 className="text-xl md:text-4xl font-semibold">{selectedDrink.strDrink}</h2>
      {getDirections(selectedDrink)}
      <p className="text-base md:text-2xl">{selectedDrink.strInstructions}</p>
    </div>
  </div>);
}

function getDirections(drink: DrinkInterface)  {
  const ingredientString = 'strIngredient';
  const measurementString = 'strMeasure';
  const directionsArray = [];
  for (let i = 1; i <= 15; i++) {
    if (drink[`${ingredientString}${i}`] !== '') {
      const measurement = drink[`${measurementString}${i}`];
      const ingredient = drink[`${ingredientString}${i}`];
      directionsArray.push(`${measurement} — ${ingredient}`);
    } else {
      break;
    }
  }
  return <ul className="my-6">
    {directionsArray.map((item, i) => <li key={i}>{item}</li>)}
  </ul>;
}

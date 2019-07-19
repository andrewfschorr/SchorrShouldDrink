import React from 'react';

export default ({selectedDrink} : any) => {
  if (selectedDrink === null) return null;
  return (
    <div className="flex">
    <img className="mb-6 mr-6 rounded" style={{width: '20%'}} src={selectedDrink.strDrinkThumb} alt=""/>
    <div className="flex-grow">
      <h2 className="text-4xl font-semibold">{selectedDrink.strDrink}</h2>
      {getDirections(selectedDrink)}
      <p className="text-2xl">{selectedDrink.strInstructions}</p>
    </div>
  </div>);

}

function getDirections(drink: any) {
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

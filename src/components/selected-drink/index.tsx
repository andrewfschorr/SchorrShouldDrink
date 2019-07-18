import React, { useState, useEffect } from 'react';

export default ({selectedDrink} : any) => {
  let [drinkComponent, setDrinkCompontnt] = useState(selectedDrink);

  useEffect(() => {
    if (selectedDrink === null) {
      setDrinkCompontnt(selectedDrink);
      return;
    }
    fetch(`https://www.thecocktaildb.com/api/json/v2/8673533/lookup.php?i=${selectedDrink}`)
      .then(resp => resp.json())
      .then(data => {
        const drink = data.drinks[0];
        console.log(drink);
        const selectedDrinkComponent = <div className="flex">
          <img className="mb-6 mr-6 rounded" style={{width: '20%'}} src={drink.strDrinkThumb} alt=""/>
          <div className="flex-grow">
            <h2 className="text-4xl font-semibold">{drink.strDrink}</h2>
            {getDirections(drink)}
            <p className="text-2xl">{drink.strInstructions}</p>
          </div>
        </div>
        setDrinkCompontnt(selectedDrinkComponent);
        window.scrollTo(0, 0)
      })
  }, [selectedDrink]);


  return selectedDrink === null ? selectedDrink : drinkComponent;
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

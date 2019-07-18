import React, { useEffect, useState } from 'react';

const NONE_FOUND = 'None Found'

interface selectedIngredients {
  selectedIngredients: Array<string>
  selectDrink: any,
}

interface DrinkInterface {
  name: string,
  img: string,
  id: string,
  selectDrink: any,
}

const Drink = ({name, img, id, selectDrink} : DrinkInterface) => {
  return <div
      className="w-1/6 mb-4 p-6 cursor-pointer"
      onClick={() => selectDrink(id)}
    >
    <img className="rounded" src={img} />
    <p className="mt-3">{name}</p>
  </div>
}

export default ({ selectedIngredients, selectDrink }: selectedIngredients) => {
  // console.log(selectedIngredients);

  const [drinkResults, setDrinks] = useState();

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?i=${normalizeIngredients(selectedIngredients)}`).then(resp => resp.json())
      .then(data => {
        if (Array.isArray(data.drinks)) {
          setDrinks({drinks: data.drinks.map((drink:any) => {
            return {
              name: drink.strDrink,
              img: drink.strDrinkThumb,
              id: drink.idDrink,
            }
          })});
        } else {
          setDrinks(data);
        }
      });
  }, [selectedIngredients]);

  if (typeof drinkResults === 'undefined') {
    return <p className="mt-6">loading... 🍸</p>
  }

  if (drinkResults.drinks === NONE_FOUND) {
    return <p className="mt-6">none found ☹️</p>
  }

  return (
    <div className="flex flex-wrap -mb-4">
      {drinkResults.drinks.map((drink:any, index:number) =>
        <Drink
          name={drink.name}
          img={drink.img}
          id={drink.id}
          key={index}
          selectDrink={selectDrink}
        />
      )}
    </div>
  )
}

function normalizeIngredients(drinks: Array<string>) {
  if (drinks.length === 1 && drinks[0] === '') {
    return '';
  }
  return drinks.filter((item, index) => drinks.indexOf(item) === index && item !== '')
    .map(drink => drink.replace(/ /g, '_')).join(',');
}

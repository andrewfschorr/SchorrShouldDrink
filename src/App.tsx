import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaCocktail } from 'react-icons/fa';
import Ingredients from './components/ingredient';
import DrinkResults from './components/drink-results';
import SelectedDrink from './components/selected-drink';

import './App.css';

const API_BASE = 'https://www.thecocktaildb.com/api/json/v2/8673533';

const AppWrapper = styled.div`
  // text-align: center;
  // background-color: red;
`

function App() {

  const [selectedIngredients, setSelectedIngredients] = useState<Array<string>>(['']);
  const [selectedDrink, setSelectDrink] = useState<any | null>(null);
  const [returnedDrinks, setRetunedDrinks] = useState([]);

  useEffect(() => {
    fetchCocktails(selectedIngredients, (matchingCocktails: any) => {
      setRetunedDrinks(matchingCocktails);
    });
  }, [selectedIngredients]);

  return (
    <Fragment>
      <nav className="flex items-center justify-between flex-wrap color-bg-blue p-2">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <div className="pr-2">
            <IconContext.Provider value={{ className: "pr-3 text-4xl" }}>
              <div>
                <FaCocktail />
              </div>
            </IconContext.Provider>
          </div>
          <span className="font-semibold text-xl tracking-tight inline-block align-baseline">Schorr Should Drink</span>
        </div>
        <div>
          <button
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            onClick={() => getRandomCocktail((random:any) => {
              const drink = random.drinks[0];
              setSelectDrink(drink);
            })}
            >
            Surprise me <span aria-label="sparkles, yo" role="img">✨</span>
          </button>
        </div>
      </nav>
      <AppWrapper className="container mx-auto pt-6 px-2">
        <SelectedDrink selectedDrink={selectedDrink} />
        <Ingredients
          setSelectedCb={(selectedDrinks: Array<string>) => {
            setSelectedIngredients(selectedDrinks)
          }}
        />
        <DrinkResults
          matchingDrinks={returnedDrinks}
          selectDrink={(drinkId: number) => fetchCocktail(drinkId, setSelectDrink)}
        />
      </AppWrapper>
    </Fragment>
  );
}

function fetchCocktail(drinkId:number, cb:any) {
  fetch(`${API_BASE}/lookup.php?i=${drinkId}`)
    .then(resp => resp.json())
    .then(data => {
      const drink = data.drinks[0];
      cb(drink);
    });
}

function fetchCocktails(ingredients: Array<string>, cb: any) {
  fetch(`${API_BASE}/filter.php?i=${normalizeIngredients(ingredients)}`).then(resp => resp.json())
    .then(data => {
      if (Array.isArray(data.drinks)) {
        cb(data.drinks.map((drink:any) => {
          return {
            name: drink.strDrink,
            img: drink.strDrinkThumb,
            id: drink.idDrink,
          }
        }));
      } else {
        cb(data);
      }
    });
}

function getRandomCocktail(cb:any) {
  fetch(`${API_BASE}/random.php`).then(resp => resp.json())
  .then(cb);
}

function normalizeIngredients(drinks: Array<string>) {
  if (drinks.length === 1 && drinks[0] === '') {
    return '';
  }
  return drinks.filter((item, index) => drinks.indexOf(item) === index && item !== '')
    .map(drink => drink.replace(/ /g, '_')).join(',');
}


export default App;

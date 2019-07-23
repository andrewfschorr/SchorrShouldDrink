import React, { Fragment, useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { FaCocktail } from 'react-icons/fa';
import Ingredients from './components/ingredient';
import DrinkResults from './components/drink-results';
import SelectedDrink from './components/selected-drink';

import { fetchCocktail, fetchCocktails, getRandomCocktail } from './services';
import { DrinkResponse } from './interfaces/drink-interface';

import './App.css';

const cache:{ [index:string] : Array<DrinkResponse> } = {};

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState<Array<string> | null>(null);
  const [selectedDrink, setSelectDrink] = useState<any | null>(null);
  const [returnedDrinks, setRetunedDrinks] = useState<Array<DrinkResponse>>([]);

  useEffect(() => {
    if (selectedIngredients === null) return;
    // cachedDrinkCachedFetch(selectedIngredients);
    const key = selectedIngredients.filter(i =>  i!== '').join('');
    if (cache.hasOwnProperty(key)) {
      setRetunedDrinks(cache[key]);
    } else {
      fetchCocktails(selectedIngredients, (matchingCocktails: any) => {
        cache[key] = matchingCocktails;
        setRetunedDrinks(matchingCocktails);
        console.log(cache);
      });
    }

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
            onClick={() => getRandomCocktail((drink) => {
              setSelectDrink(drink);
            })}
            >
            Surprise me <span aria-label="sparkles, yo" role="img">✨</span>
          </button>
        </div>
      </nav>
      <div className="container mx-auto pt-6 px-2">
        <SelectedDrink selectedDrink={selectedDrink} />
        <Ingredients
          setSelectedCb={(selectedIngredients: Array<string>) => {
            setSelectedIngredients(selectedIngredients)
          }}
        />
        <DrinkResults
          matchingDrinks={returnedDrinks}
          selectDrink={(drinkId: number) => fetchCocktail(drinkId, setSelectDrink)}
        />
      </div>
    </Fragment>
  );
}

export default App;

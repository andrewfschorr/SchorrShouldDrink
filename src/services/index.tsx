import { DrinkResponse } from '../interfaces/drink-interface';

const API_ROOT = `https://www.thecocktaildb.com/api/json/v2/8673533/`


export function getIngredientList(cb: (drinkIngredientsArray: Array<string>) => void) {
  fetch(`${API_ROOT}list.php?i=list`)
    .then(resp => resp.json())
    .then((drinkResponse: DrinkResponse) => {
      return drinkResponse.drinks
        .map((item: any) => item.strIngredient1)
        .sort((a: string, b: string) => a.localeCompare(b))
    }).then((drinkIngredientsArray) => {
      cb(['', ...drinkIngredientsArray])
    });
}

export function fetchCocktail(drinkId:number, cb: (selectedIngredients: any) => void) {
  fetch(`${API_ROOT}/lookup.php?i=${drinkId}`)
    .then(resp => resp.json())
    .then(data => {
      const drink = data.drinks[0];
      cb(drink);
    });
}

export function fetchCocktails(ingredients: Array<string>, cb: (matchingCocktails: Array<string>) => void) {
  fetch(`${API_ROOT}/filter.php?i=${normalizeIngredients(ingredients)}`).then(resp => resp.json())
    .then(data => {
      if (Array.isArray(data.drinks)) {
        cb(data.drinks.map((drink:any) => {
          // console.log(drink)
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

export function getRandomCocktail(cb: <T>(drink: T) => void) {
  fetch(`${API_ROOT}/random.php`).then(resp => resp.json())
  .then(response => response.drinks[0])
  .then(cb);
}

/*
 * Helpers
 */
function normalizeIngredients(drinks: Array<string>) {
  if (drinks.length === 1 && drinks[0] === '') {
    return '';
  }
  return drinks.filter((item, index) => drinks.indexOf(item) === index && item !== '')
    .map(drink => drink.replace(/ /g, '_')).join(',');
}

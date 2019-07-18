import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const IngredientWrapper = styled.div`
    // text-align: center;
    // background-color: red;
`;

const EMPTY_ITEM = '';

export default () => {
  const [ingredients, setIngredients] = useState<Array<string>>([]);
  const [selectedIngredients, updateIngredients] = useState<Array<string>>([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then(resp => resp.json())
      .then((data: any) => data.drinks.map((item: any) => item.strIngredient1))
      .then(ingredients => setIngredients([EMPTY_ITEM, ...ingredients]));
  }, []);

  return (
    <IngredientWrapper>
      <h1 className="mb-6 text-2xl border-b-2 border-gray-600 ">Ingredients</h1>
      <select>
        {ingredients.length > 0 && ingredients.map(i => <option value={i}>{i}</option>)}
      </select>
      <button className="mt-6 bg-red-500 text-white px-2 ml-6 border border-red-600 rounded">
        Delete
      </button>
      <button className="mt-6 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Add another ingredient!
      </button>
    </IngredientWrapper>
  );
};

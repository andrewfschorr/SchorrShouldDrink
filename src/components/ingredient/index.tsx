import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const IngredientWrapper = styled.div`
  // text-align: center;
  // background-color: red;
`

export default () => {

  const [ingredients, setIngredients] = useState<Array<string>>([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list').then(resp => resp.json())
    .then((data: any) => data.drinks.map((item: any) => item.strIngredient1))
    .then(setIngredients);
  }, []);

  return (
    <IngredientWrapper>
      <h1 className="text-2xl border-b-2 border-gray-600 ">Ingredients</h1>
      {ingredients.length > 0 && ingredients.map(item => console.log(item))}
    </IngredientWrapper>
  );
}

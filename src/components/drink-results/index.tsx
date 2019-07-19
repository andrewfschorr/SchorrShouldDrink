import React, { useEffect, useState } from 'react';

const NONE_FOUND = 'None Found'

interface selectedIngredientsProps {
  matchingDrinks: any,
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
      onClick={() => {
        window.scrollTo(0, 0);
        selectDrink(id)
      }}
    >
    <img className="rounded" src={img} />
    <p className="mt-3">{name}</p>
  </div>
}

export default ({ matchingDrinks, selectDrink }: selectedIngredientsProps) => {
  const [drinkResults, setDrink] = useState();

  useEffect(() => {
      setDrink(matchingDrinks);
  }, [matchingDrinks]);

  if (typeof drinkResults === 'undefined') {
    return <p className="mt-6">loading... 🍸</p>
  }

  if (drinkResults.drinks === NONE_FOUND) {
    return <p className="mt-6">none found ☹️</p>
  }
  return (
    <div className="flex flex-wrap -mb-4">
      {matchingDrinks.length > 0 && matchingDrinks.map((drink:any, index:number) =>
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

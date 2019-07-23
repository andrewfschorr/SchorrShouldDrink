import React, { useEffect, useState, Fragment } from 'react'
import styled from 'styled-components'

import { getIngredientList } from '../../services';

const IngredientWrapper = styled.div`
  display: block;
  margin-bottom: 1rem;
`

interface IngredientsProps {
  setSelectedCb: (cb: Array<string>) => void
}

export default ({ setSelectedCb }: IngredientsProps) => {
  const [ingredientsOpts, setIngredientOpts] = useState<Array<string>>([''])
  const [selectedIngredients, updateIngredients] = useState<Array<string>>([''])

  useEffect(() => {
    getIngredientList(setIngredientOpts);
  }, [])

  useEffect(() => {
    setSelectedCb(selectedIngredients)
  }, [selectedIngredients])

  return (
    <Fragment>
      <h1 className="mb-6 text-2xl border-b-2 border-gray-600 ">Ingredients</h1>
      {ingredientsOpts.length > 0 &&
        selectedIngredients.map((selected, i) => {
          return (
            <IngredientChooser
              options={ingredientsOpts}
              key={i}
              index={i}
              deleteCb={(index: number) => {
                updateIngredients([
                  ...selectedIngredients.slice(0, index),
                  ...selectedIngredients.slice(index + 1),
                ])
              }}
              selected={selected}
              updatedrinkCb={(ingredient: string, i: number) => {
                const newIngredients = selectedIngredients.slice() // double check this is needed? feels bad, man
                newIngredients[i] = ingredient
                updateIngredients(newIngredients)
              }}
            />
          )
        })}
      <button
        className="mt-6 block mb-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        onClick={() => {
          updateIngredients(selectedIngredients.concat(''))
        }}
      >
        Add another ingredient!
      </button>
    </Fragment>
  )
}

interface IngredientProps {
  options: Array<string>
  index: number
  deleteCb: (index:number) => void
  updatedrinkCb: (targetValue: string, index:number) => void
  selected: string
}

const IngredientChooser = ({
  options,
  index,
  deleteCb,
  updatedrinkCb,
  selected,
}: IngredientProps) => {
  return (
    <IngredientWrapper>
      <select
        onChange={e => updatedrinkCb(e.target.value, index)}
        value={selected}
        className="border border-blue-800"
      >
        {options.map((opt: string, i: number) => (
          <option className="bg-gray-600" value={opt} key={i}>
            {opt}
          </option>
        ))}
      </select>
      <button
        className="mt-6 bg-red-500 text-white px-2 ml-6 border border-red-600 rounded"
        onClick={() => deleteCb(index)}
      >
        Delete
      </button>
    </IngredientWrapper>
  )
}

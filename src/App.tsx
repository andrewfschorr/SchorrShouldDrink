import React, { Fragment } from 'react';
import styled from 'styled-components';
import { IconContext } from "react-icons";
import { FaCocktail } from 'react-icons/fa';
import './App.css';

const AppWrapper = styled.div`
  text-align: center;
  background-color: red;
`

function App() {
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
      </nav>
      <AppWrapper className="container mx-auto">
        <div className="wrapper">
          <h1>Hello world!</h1>
        </div>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Holy smokes!</strong>
          <span className="block sm:inline">Something seriously bad happened.</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
          </span>
        </div>
        <button className="btn btn-blue">
          Button
      </button>
      </AppWrapper>
    </Fragment>
  );
}

export default App;

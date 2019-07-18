import React, { Fragment } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaCocktail } from 'react-icons/fa';
import Ingredients from './components/ingredient';

import './App.css';

const AppWrapper = styled.div`
  // text-align: center;
  // background-color: red;
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
        <Ingredients/>
      </AppWrapper>
    </Fragment>
  );
}

export default App;

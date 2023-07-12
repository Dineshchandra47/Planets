import { useState } from 'react'                                  
import { Switch, Route, useLocation } from 'react-router-dom';

import './App.css'                

const App = ()=> {
  return <>
        const location = useLocation();
    const [activePlanet, setActivePlanet] = useState('/');

    return (
        <Provider>
            <Wrapper>
                <Navbar
                    pathName={location.pathname}
                    onHover={setActivePlanet}
                    activePlanet={activePlanet}
               activePlanet={activePlanet}
               />

              
            </Wrapper>
          </Provider>
        )                 
  </>
}
export default App

// import { useState } from 'react'                                  
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

              <AnimatePresence>
                    <Switch location={location} key={location.key}>
                        <Route exact path="/mercury">
                            <Mercury />
                        </Route>
                        <Route exact path="/venus">
                            <Venus />
                        </Route>
                        <Route exact path="/earth">
                            <Earth />
                        </Route>
                        <Route exact path="/mars">
                            <Mars />
                        </Route>
                        <Route exact path="/jupiter">
                            <Jupiter />
                        </Route>
                        <Route exact path="/saturn">
                            <Saturn />
                        </Route>
                        <Route exact path="/uranus">
                            <Uranus />
                        </Route>
                        <Route exact path="/neptune">
                            <Neptune />
                        </Route>
                        <Route exact path="/">
                            <KeyVisual activePlanet={activePlanet} />
                        </Route>
                    </Switch>
                </AnimatePresence>
            </Wrapper>
          </Provider>
        )                 
  </>
}
export default App

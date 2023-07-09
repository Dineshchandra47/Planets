import { useState } from 'react'                                  
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.css'                

const App = ()=> {
  return <>
        cosnt location = useLocation()
        const [active,setActivePlanet] = useState('/') 

        return (
          <Provider>
            <Wrapper>
              <Navbar pathName = {location.pathname}
               onHover = {setAcivePlanet}
               activePlanet = {activePalanet}
               >

                

              </Navbar>
            </Wrapper>
          </Provider>
        )                 
  </>
}
export default App

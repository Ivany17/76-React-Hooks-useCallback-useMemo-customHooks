import './App.css';
import React, {useState} from 'react';
import FuncStopWatch from './components/FuncStopWatch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { UserContext, ThemeContext } from './context';
import CONSTANTS from './constants';
const {THEMES} = CONSTANTS;

function App(){
  const [user, setUser] = useState({
    id:1,
    name:'Ivan Yarem'
  });
  const themeArrState = useState(THEMES.LIGHT);
  return(
    <>
      <ThemeContext.Provider value={themeArrState}>
        <UserContext.Provider value={user}>
          <BrowserRouter>
            <button>switch theme</button>
            <Routes>
              <Route path='/' element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
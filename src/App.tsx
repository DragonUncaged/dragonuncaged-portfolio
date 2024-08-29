import React, {useEffect} from 'react';
import { HashRouter,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


function App() {

  useEffect(() => {
    const existingWidth = localStorage.getItem("sideBarWidth");

    if (!existingWidth) {      
      localStorage.setItem("sideBarWidth", "270");
    }

  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
      </Routes>  
    </HashRouter>

  );
}

export default App;


import Home from "./assets/Home.jsx"
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
const App = () => {
  return (

  
      <Router>
        
        <Routes>
          <Route path="/lic-mapa" element={<Home/>}/>
        
        </Routes>
      </Router>

  );
};

export default App;

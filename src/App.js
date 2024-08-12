import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <BrowserRouter>
    <NavigationBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import "../src/styles/app.css"

// Componentes
import Card from './components/Card';
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import NavBar from './components/NavBar';
import Doctors from './components/Doctors';
import Form from './components/Form';
import Doctor from './components/Doctor';

import {Routes, Route} from "react-router-dom";
import {useReducer, useState} from "react";

// Importamos Context
import ThemeConext from './context/ThemeContext.js';
import FavsContext from './context/FavsContext';
import Favs from './components/Favs';



//Info que compartimos entre componentes
const globalTheme = {
  light: {
    font: "black",
    background: "white",
  },
  dark: {
    font: "white",
    background: "#e8e2ff",
  },
};


// Llamada a la API
const fetchDoctorPorId = async id=>{
  try {
      const dataJSON = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const doctor = await dataJSON.json();
      console.log(doctor)
      return doctor;
  } catch (e) {
      console.log("Error: ", e.message);
  }
}

function App() {
  const [favsDoctors, setFavDoctors] = useState([]);

  const [theme, setTheme] = useState(globalTheme.light)

  const themeHanldeOnClick = (e)=>{
    console.log("Theme Cambiado!");
    theme === globalTheme.light ? setTheme(globalTheme.dark) : setTheme(globalTheme.light)
  }
  return (
    <div className="App">
      <ThemeConext.Provider value={{themeHanldeOnClick, theme}}>
        <Header className='header'>
          <NavBar />
        </Header>
        <FavsContext.Provider value={{favsDoctors, setFavDoctors, fetchDoctorPorId}}>
            <Routes className='routes'>
                <Route path='/home' element={ <Doctors/>}/>
                <Route path='/dentista/:id' element={ <Doctor/>}/>
                <Route path='/contacto' element={ <Form/>}/>
                <Route path='/favs' element={ <Favs/>}/>
            </Routes>
        </FavsContext.Provider>
        <Footer className='footer' />
      </ThemeConext.Provider>
    </div>
  );
}

export default App;

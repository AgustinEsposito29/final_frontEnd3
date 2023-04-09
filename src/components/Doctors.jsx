
import "../styles/doctors.css";
import React, { useContext } from 'react'
import Card from './Card'
import { useState, useEffect } from 'react'

// Importamos contexto
import ThemeContext from "../context/ThemeContext";
import { Link } from "react-router-dom";

export default function Doctors() {

    const {theme} = useContext(ThemeContext);

    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        console.log('Doctor renderizado');
        fetchDoctors();
    }, [])

    const fetchDoctors = async () =>{
        try {
            const dataJSON = await fetch('https://jsonplaceholder.typicode.com/users')
            const doctors = await dataJSON.json();
            setDoctors(doctors)
        } catch (e) {
            console.error("Error Message: ", e.message);
        }
    }
    return (
        <div className='doctors-container' style = {{background: theme.background}}>
            {doctors.map(doctor =>  <Card key={doctor.id} name={doctor.name} email={doctor.email} telefono={doctor.phone} sitioWeb={doctor.website} id={doctor.id}/>)}
        </div>
    )
}

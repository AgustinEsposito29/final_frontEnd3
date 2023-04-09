import React, { useCallback, useEffect, useState } from 'react'
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function Favs() {

const favoritos = localStorage.getItem('favs').split(',')

const {theme} = useContext(ThemeContext);

const doctores = [];

const [favsDoctors, setFavDoctors] = useState([])

const fetchDoctorPorId = async id=>{
    try {
        const dataJSON = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const doctor = await dataJSON.json();
        doctores.push(doctor)
        setFavDoctors(doctores);
    } catch (e) {
        console.log("Error: ", e.message);
    }
}

const doctosFavoritos = useCallback(async () =>{
    for (const id of favoritos) {
        await fetchDoctorPorId(id)
    }
}
, [favoritos, favsDoctors])

useEffect(()=>{
    doctosFavoritos()
}, [])


  return (
    <div className='doctors-container' style = {{background: theme.background}}>

            {/* <Card key={doctor.id} name={doctor.name} email={doctor.email} telefono={doctor.phone} sitioWeb={doctor.website} id={doctor.id}/> */}
        </div>
  )
}

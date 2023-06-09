import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import "../styles/card.styles.css"
import { useParams } from 'react-router-dom';
import FavsContext from '../context/FavsContext';

export default function Doctor() {

    const {id} = useParams();
    const [doctor, setDoctor] = useState({});

    const favsContext = useContext(FavsContext);

    useEffect(()=>{
        console.log(favsContext.fetchDoctorPorId);
        setDoctor(favsContext.fetchDoctorPorId(id));
    }, [id, favsContext]);





    return (
        <div className='card-container'>
            <div className='card'>
                <h2>{doctor.name}</h2>
                <p>{doctor.email}</p>
                <p> {doctor.phone}</p>
                <p><a href={doctor.website}>{doctor.website}</a></p>
            </div>
        </div>
    )
}

import React, { useContext } from 'react'
import "../styles/card.styles.css"
import { Link } from 'react-router-dom';

// Importamos context
import FavsContext from '../context/FavsContext';

export default function Card({name, email, telefono, sitioWeb, id}) {

    const {favsDoctors, setFavDoctors} = useContext(FavsContext)
    
    const handleOnClickStar = (e)=>{
        localStorage.setItem('favs', favsDoctors)
        setFavDoctors(prev => ([...prev, id]));
        console.log(favsDoctors);
    }

    return (
        <div className='card'>
            <Link to={`/dentista/${id}`}>
                <h2>{name}</h2>
            </Link>
            <p>{email}</p>
            <p> {telefono}</p>
            <p><a href={sitioWeb}>{sitioWeb}</a></p>
            <button className="star-button" onClick={handleOnClickStar}>
                <i className="fas fa-star"></i>
            </button>
        </div>

    )
}

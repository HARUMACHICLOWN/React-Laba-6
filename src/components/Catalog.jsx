import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Loader from "./UI/loader/Loader";

export default function Catalog(){
    const[pets,setPets]=useState([])
    useEffect(()=>{
        fetch("https://petstore.swagger.io/v2/pet/findByStatus?status=available")
        .then(response => response.json())
        .then(data => setPets(data))
        .catch(error => console.error(error));
    }, [])
    return(
        <div>
        {pets.map(pet=>(
            <div>
            <h1>Название Животного: {pet.name}</h1>
            <p>статус: <u>{pet.status}</u></p>
            <p>PhotoUrls: - {pet.photoUrls}</p>
            <p>Id: {pet.id}</p><hr/>
           
            </div>
        ))}<Loader/>
    </div>
    )
}
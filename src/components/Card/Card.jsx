import React, { useState } from 'react';

function Card() {
    const [data, setData] = useState({
        image: "",
        title: "first character",
        description: "snakey snakey"
    })
    const [rating, setRating] = useState(0)


    let useData = data.map(d => 
        <div className="card__container">
            <div className="card__rating">{rating}</div>
            <img className="card__image" src={d.image}></img>
            <h1>{d.title}</h1>
            <p>{d.description}</p>
        </div>
    )

    return useData
}

export default Card

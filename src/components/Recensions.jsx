import React from 'react'
import { useState, useEffect } from 'react'
import quotes from '/src/assets/images/quotes.svg'

import stars4 from '/src/assets/images/stars4.svg'
import stars5 from '/src/assets/images/stars5.svg'


const starImages = {
    4: stars4,
    5: stars5,
}


function Testimonials() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://win24-assignment.azurewebsites.net/api/testimonials")
            .then((response) => response.json())
            .then((data) => setReviews(data))
    }, []);

    return (
        <div className="fifth-page">
            <div className="container">
                <section id="recensions">
                    <h2 className="rubrik">Clients are<br />Loving Our App</h2>
                    {reviews.map((review) => (
                        <div className="box-3" key={review.id}>
                            <div className="imgs">
                                <img className="quotes" src={quotes} alt="quotes" />
                                <img className="ratings" src={starImages[review.starRating]} alt={`${review.author}'s rating`} />
                            </div>
                            <p className="body-l">{review.comment}</p>
                            <div className="fannie">
                                <img src={review.avatarUrl} alt={`animated picture of ${review.author}`} />
                                <div className="text-fannie">
                                    <h3 className="rubrik">{review.name}</h3>
                                    <p className="body-s">{review.jobRole}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default Testimonials;
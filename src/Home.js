import React from 'react'
import img from './Images/black-forest-cake.jpg'
import './Home.css';
export default function Home() {
    return (
        <div id="bake">
            <h1>Welcome to My bakery</h1>
            <p>Bakeries are more than just places where flour and sugar come together.
                They are havens of warmth, comfort, and the delicious aromas that waft through the air.
                They hold the power to transport us back to childhood memories, evoke feelings of nostalgia, and
                create moments of sheer joy. In this blog post, we celebrate the artistry and passion that goes into
                crafting the perfect bakery treats.
            </p>

            <img src={img} alt="" />


        </div>


    )
}

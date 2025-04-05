import React from 'react'
import './Product.css';
import image from './Images/biscuties & cookies.png';
import imag from './Images/croissants.png';
import ima from './Images/strawberry special.png';
import my from './Images/36.jpg';
import mypic from './Images/cupcake2.jpeg';
import pic from './Images/breads.png';



export default function Product() {
    return (
        <div>

            <h1>Bakery Products</h1>
            <img src={image} alt={image} />
            <img src={imag} alt={imag} />
            <img src={ima} alt={ima} />
            <img src={my} alt={my} />
            <img src={mypic} alt={mypic} />
            <img src={pic} alt={pic} />

            <input type="button" value="ADD TO CART" class="centered-button" />


        </div>
    )
}

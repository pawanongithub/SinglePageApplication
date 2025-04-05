import React from 'react'
import './Aboutus.css';

import Img from './Images/img1.jpg';
import Imag from './Images/img2.jpeg';
import mypic from './Images/img3.jpeg';

function Aboutus() {
    return (
        <>
            <div>


                <h1>BUTTER BLISS</h1>

                <h2>Our sweet story</h2>
                <p>We are <b>Butter Bliss</b> and we love baking cakes, bakes and desserts.
                    With this pure, sweet sentiment, we founded our company and opened our first
                    American-style bakery in Notting Hill,2025. And so arrived the authentic taste of fresh,
                    American home baking in London. We are delighted to help our guests celebrate and spoil
                    themselves everyday! We offer an incredible range of American-style baked treats.
                    Cupcakes, celebration cakes, brownies, pies, cheesecakes… or perhaps the Monthly Special? Honestly, we don’t
                    think you can go wrong.</p>
                <p>From a young age, I loved spending time in the kitchen with my
                    grandmother, learning the art of baking from scratch. Now, I'm
                    passionate about sharing that love with our
                    community through our handcrafted pastries and cakes.</p>
            </div>

            <img src={Img} alt="" />
            <img src={Imag} alt="" />
            <img src={mypic} alt="" />
        </>
    )
}
export default Aboutus;



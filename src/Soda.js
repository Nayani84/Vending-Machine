import React from "react";
import { Link } from "react-router-dom";
import './Soda.css';

function Soda() {
    return (
        <div className="Soda">
            <h1>This is Soda!</h1>
            <p>Refreshing & Fizzy!</p>
            <img src="https://i5.walmartimages.com/seo/Sprite-12oz-cans-Pack-of-24_e1dd5941-7122-4d9e-95f4-2f45fc0415d4.1708f37e94750898290d92adf357f112.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" alt="soda" />
            <div className="Soda-link">
                <Link to="/">Go back to the Vending Machine</Link>
            </div>

        </div>
    );
}

export default Soda;
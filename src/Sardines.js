import React from "react";
import { Link } from "react-router-dom";
import './Sardines.css';

function Sardines() {
    return (
        <div className="Sardines">
            <h1>This is Sardines!</h1>
            <p>Savory and packed with flavor!</p>
            <img src="https://images.albertsons-media.com/is/image/ABS/960061080-C1N1?$ng-ecom-pdp-desktop$&defaultImage=Not_Available" alt="sardines" />
            <div className="Sardines-link">
                <Link to="/">Go back to the Vending Machine</Link>
            </div>

        </div>
    );
}

export default Sardines;
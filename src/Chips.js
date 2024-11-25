import React from "react";
import { Link } from "react-router-dom";
import './Chips.css';

function Chips() {
    return (
        <div className="Chips">
            <h1>This is Chips!</h1>
            <p>Delicious & crunchy!</p>
            <img src="https://digitalassets.pepsico.com/m/3327ca92d1315ac2/Hi_Res-00028400734035_C1C1.jpg" alt="Chips" />
            <div className="Chips-link">
                <Link to="/">Go back to the Vending Machine</Link>
            </div>
        </div>
    );
}

export default Chips;
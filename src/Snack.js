import React from "react";
import { Link } from "react-router-dom";
import './Snack.css';

function Snack() {
    return (
        <div className="Snack">
            <h1>HELLO I AM A VENDING MACHINE!</h1>
            <h2>WHAT WOULD YOU LIKE TO HAVE ?</h2>
            <div className="Snack-img">
                <img src="https://m.media-amazon.com/images/I/41g16UXvZSL.jpg" alt="vending machine" style={{ width: "200px" }} />
            </div>
            <div className="Snack-links">
                <Link to="/chips">Chips</Link>
                <Link to="/soda">Soda</Link>
                <Link to="/sardines">Sardines</Link>
            </div>
        </div>
    );
}

export default Snack;
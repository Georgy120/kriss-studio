import React from 'react';
import "./ComingSoon.css"
import { FaPhoneAlt } from "react-icons/fa"

function ComingSoon() {
    return (
        <div className="coming-container">
            <div className="content">
            <h1>Strona w budowie</h1>
            <h2>Zapraszamy wkrótce</h2>
            <div className="line"></div>
            <div className="contact">
            <i className="iconPhone"><FaPhoneAlt /></i>
            <h3>509 659 173</h3>
            </div>
            </div>
        </div>
    )
}

export default ComingSoon;
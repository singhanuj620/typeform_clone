import React from 'react'
import './Button.css'

const Button = ({ text = "Anuj" }) => {
    return (
        <div className="button">
            <div className="button-text">{text}</div>
        </div>
    )
}

export default Button
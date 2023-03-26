import React from 'react'
import './Input.css'

const Input = ({ placeholder, handleInputResponse, value }) => {
    return (
        <div className="input-div">
            <input type="text" className="inp" placeholder={placeholder} value={value} onChange={(e) => handleInputResponse(e)}></input>
        </div>
    )
}

export default Input
import React from 'react'
import './Dropdownlist.css'

const Dropdownlist = ({ value, handleClick }) => {
    return (
        <div className="option-value" onClick={() => handleClick(value)}>{value}</div>
    )
}

export default Dropdownlist
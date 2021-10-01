import React from 'react'
import './App.css'
const Button = (props) => {
    return (
        <div className="buttonLeft">
            <button>
            {props.number}
            </button>
        </div>
    )
}

export default Button

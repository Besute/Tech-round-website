import React from 'react'
import PropTypes from 'prop-types';
import "./../css/style.css"


const Button = function({text, size}) {
    return (
        <div className={size == "standart" ? "button button_standart" : "button button_big"}>
            <p className="button_text">{text}</p>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button
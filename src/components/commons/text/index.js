import React from 'react';
import PropTypes from "prop-types";

/**
 * Componente que permite renderizar un texto
 */
const TextField = (props) => (
    <div>{props.text}</div>
);

TextField.propTypes = {
    /**
     * Define el contenido del texto
     */
    text: PropTypes.string
};

TextField.defaultProps = {
    text: ''
};

export default TextField;
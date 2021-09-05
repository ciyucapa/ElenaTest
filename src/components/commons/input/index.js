import React from 'react';
import PropTypes from "prop-types";

/**
 * Componente que renderiza un input
 */
const InputField = (props) => (
    <input 
        type={props.type} 
        value={props.value} 
        onChange={props.onChangeInput}  
        placeholder={props.placeholder}
    />
);

InputField.propTypes = {
    /**
     * Tipo del input.
     */
    type: PropTypes.string,
    /**
     * Valor del input.
     */
    value: PropTypes.string,
    /**
     * Contenido del placeholder
     */
    placeholder: PropTypes.string,
    /**
     * Funcion que modifica el value input.
     */
    onChangeInput: PropTypes.func,

};

InputField.defaultProps = {
    type: '',
    value: '',
    placeholder: '',
    onChangeInput: () => {}
};

export default InputField;
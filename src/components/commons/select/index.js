import React from 'react';
import PropTypes from "prop-types";

/**
 * Componente que renderiza un select
 */
const SelectField = (props) => (
    <select 
        value={props.value} 
        onChange={props.onSelect}>
            {props.options.map((option) => (
                <option 
                    key={option.value} 
                    value={option.value}>
                        {option.label}
                </option>
            ))}
    </select>
);

SelectField.propTypes = {
    /**
     * Valor.
     */
    value: PropTypes.string,
    /**
     * Opciones a renderizar.
     */
    options: PropTypes.array,
    /**
     * Funcion que notifica el cambio del valor.
     */
    onSelect: PropTypes.func,
};

SelectField.defaultProps = {
    value: '',
    options: [],
    onSelect: () => {},
};

export default SelectField;
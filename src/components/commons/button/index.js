import PropTypes from 'prop-types';

/**
 * Componente que renderiza un boton basico
 */
const Button = (props) => (
    <button 
        onClick={props.onClick} 
        disabled={props.isDisabled}  
    >
        {props.text}
    </button>
);

Button.propTypes = {
    /**
     * Texto del boton
     */
    text: PropTypes.string,
    /**
     * Desabilita el boton cuando es requerido
     */
    isDisabled: PropTypes.bool,
    /**
     * Funcion que ejecuta el boton
     */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    text: '',
    isDisabled: false,
    onClick: () => {}
};

export default Button;
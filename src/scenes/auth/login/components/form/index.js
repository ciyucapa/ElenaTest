import React from 'react';
import PropTypes from 'prop-types';

import TextField from '../../../../../components/commons/text';
import InputField from '../../../../../components/commons/input';
import Button from '../../.../../../../../components/commons/button';
import {Container, Box, InputBox, ButtonBox} from '../../../../../components/commons/styledComponents';

/**
 * Formulario de Login.
 */
const Form = (props) => (
    <Container>
        <Box>
            <InputBox>
                <InputField
                    type="text"
                    placeholder="Telefono"
                    value={props.phone}
                    onChangeInput={props.changePhone}
                />
            </InputBox>
            <InputBox>
                <InputField
                    type="password"
                    placeholder="Contraseña"
                    value={props.password}
                    onChangeInput={props.changePassword}
                />
            </InputBox>
            {props.isError && (
                <InputBox>
                    <TextField text='Error al hacer Login' />
                </InputBox>
            )}
            <ButtonBox>
                <Button
                    text="Iniciar Sesión"
                    isDisabled={!props.isValidForm}
                    onClick={props.login}
                />
            </ButtonBox>
        </Box>
    </Container>
);

Form.propTypes = {
    /**
     * Valor del telefono.
     */
    phone: PropTypes.string,
    /**
     * Valor de la contraseña.
     */
    password: PropTypes.string,
    /**
     * Identifica si el formulario es valido para enviar.
     */
    isValidForm: PropTypes.bool,
    /**
     * Identifica si ocurrio un error al enviar el formulario.
     */
    isError: PropTypes.bool,
    /**
     * Funcion que modifica el valor del telefono.
     */
    changePhone: PropTypes.func,
    /**
     * Funcion que modifica la contraseña.
     */
    changePassword: PropTypes.func,
    /**
     * Funcion que envia el formulario.
     */
    login: PropTypes.func,
};

Form.defaultProps = {
    cellphone: '',
    password: '',
    isValidForm: false,
    isError: false,
    changeCellphone: () => {},
    changePassword: () => {},
    login: () => {},
};

export default Form;
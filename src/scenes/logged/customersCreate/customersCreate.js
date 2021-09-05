import Proptypes from 'prop-types';

import InputField from '../../../components/commons/input';
import Button from '../../../components/commons/button';
import SelectField from '../../../components/commons/select';
import {CreateBox} from '../../../components/commons/styledComponents';

/**
 * Componente que permite crear o editar un cliente
 */
const CustomersCreate = (props) => (
    <CreateBox>
        <InputField 
            placeholder="Nombres" 
            type="text" 
            onChangeInput={props.onChangeFirstName} 
            value={props.firstName} 
        />
        <InputField 
            placeholder="Apellidos" 
            type="text" 
            onChangeInput={props.onChangeLastName} 
            value={props.lastName} 
        />
        <InputField 
            placeholder="Telefono" 
            type="text" 
            onChangeInput={props.onChangeCellphone} 
            value={props.cellphone} 
        />
        <SelectField
            value={props.state}
            options={props.states}
            onSelect={props.onChangeState}
        />
        {props.cities.length > 0 && (
            <SelectField
                value={props.city}
                options={props.cities}
                onSelect={props.onChangeCity}
            />
        )}
        <InputField 
            placeholder="Dirección" 
            type="text" 
            onChangeInput={props.onChangeStreetAddress} 
            value={props.streetAddress} 
        />
        <InputField 
            placeholder="Pais" 
            type="text" 
            onChangeInput={props.onChangeCountry} 
            value={props.country} 
        />
        <Button 
            text="Enviar" 
            onClick={props.onClick} 
            isDisabled={!props.isValidForm}  
        />
    </CreateBox>
)

CustomersCreate.propTypes = {
    /**
     * Nombres
     */
    firstName: Proptypes.string,
    /**
     * Apellidos
     */
    lastName: Proptypes.string,
    /**
     * Telefono
     */
    cellphone: Proptypes.string,
    /**
     * Direccion
     */
    streetAddress: Proptypes.string,
    /**
     * Pais
     */
    country: Proptypes.string,
    /**
     * Departamento
     */
    state: Proptypes.string,
    /**
     * validez del formulario para enviar
     */
    isValidForm: Proptypes.bool,
    /**
     * Funcion que actualiza los nombres
     */
    onChangeFirstName: Proptypes.func,
    /**
     * Funcion que actualiza los apellidos
     */
    onChangeLastName: Proptypes.func,
    /**
     * Funcion que actualiza el telefono
     */
    onChangeCellphone: Proptypes.func,
    /**
     * Funcion que actualiza la direccion
     */
    onChangeStreetAddress: Proptypes.func,
    /**
     * Funcion que actualiza el pais
     */
    onChangeCountry: Proptypes.func,
    /**
     * Funcion que actualiza el departamento
     */
    onChangeState: Proptypes.func,
    /**
     * Funcion que crea o edita un cliente
     */
    onClick: Proptypes.func,
};

CustomersCreate.defaultProps = {
    firstName: '',
    lastName: '',
    cellphone: '',
    streetAddress: '',
    country: '',
    state: '',
    isValidForm: false,
    onChangeFirstName: () => {},
    onChangeLastName: () => {},
    onChangeCellphone: () => {},
    onChangeStreetAddress: () => {},
    onChangeCountry: () => {},
    onChangeState: () => {},
    onClick: () => {},
};

export default CustomersCreate;
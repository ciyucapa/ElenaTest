import Proptypes from 'prop-types';

import InputField from '../../../components/commons/input';
import Button from '../../../components/commons/button';
import SelectField from '../../../components/commons/select';
import {CreateBox} from '../../../components/commons/styledComponents';

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
    firstName: Proptypes.string,
    lastName: Proptypes.string,
    cellphone: Proptypes.string,
    streetAddress: Proptypes.string,
    country: Proptypes.string,
    state: Proptypes.shape({
        label: Proptypes.string,
    }),
    isValidForm: Proptypes.bool,
    onChangeFirstName: Proptypes.func,
    onChangeLastName: Proptypes.func,
    onChangeCellphone: Proptypes.func,
    onChangeStreetAddress: Proptypes.func,
    onChangeCountry: Proptypes.func,
    onChangeState: Proptypes.func,
    onClick: Proptypes.func,
};

CustomersCreate.defaultProps = {
    firstName: '',
    lastName: '',
    cellphone: '',
    streetAddress: '',
    country: '',
    state: {
        label: '',
    },
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
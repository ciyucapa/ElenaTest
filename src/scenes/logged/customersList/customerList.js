import Proptypes from 'prop-types';

import Button from '../../../components/commons/button'
import {ListBox, ButtonListBox} from '../../../components/commons/styledComponents'

const CustomersList = (props) => (
    <>
        {props.customers.map((customer) => (
            <ListBox key={customer.id} >
                <div>
                    <div>Direccion: {customer.address}</div>
                    <div>Telefono: {customer.cellphone}</div>
                    <div>Ciudad: {customer.city}</div>
                    <div>Nombre: {customer.firstName}</div>
                    <div>Apellido: {customer.lastName}</div>
                </div>
                <ButtonListBox>
                    <Button text="Editar" onClick={() => props.toCustomerEdit(customer.id)}/>
                </ButtonListBox>
            </ListBox>
        ))}
        <Button text="Crear nuevo cliente" onClick={props.toCreate}/>
    </>
);

CustomersList.propTypes = {
    customers: Proptypes.array,
    toCustomerEdit: Proptypes.func,
    toCreate: Proptypes.func,
};

CustomersList.defaultProps = {
    customers: [],
    toCustomerEdit: () => {},
    toCreate: () => {},
};

export default CustomersList;
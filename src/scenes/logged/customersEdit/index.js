import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import useCustomersCreate from '../../../hooks/useCustomersCreate';
import useCustomersList from '../../../hooks/useCustomersList';
import CustomersCreate from '../customersCreate/customersCreate';

/**
 * Lista de clientes.
 */
 const List = () => {
    let {id} = useParams();
    const {customers} = useCustomersList({customerId: id});
    const hook = useCustomersCreate({customerId: id});
    const {updateFormCustomer} = hook;

    useEffect(() => {
        if (customers.length > 0) {
            updateFormCustomer(customers[0]);
        }
    }, [customers]);

    return <CustomersCreate {...hook} />;
};

export default List;
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import useCustomersList from './useCustomersList';
import useCustomersCreate from './useCustomersCreate';

const useCustomersEdit = () => {
    let {id} = useParams();
    const {customers} = useCustomersList({customerId: id});
    const hook = useCustomersCreate({customerId: id});
    const {updateFormCustomer} = hook;

    useEffect(() => {
        if (customers.length > 0) {
            updateFormCustomer(customers[0]);
        }
    }, [customers]);

    return hook;
};

export default useCustomersEdit;
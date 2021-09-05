import {useMemo} from 'react';
import {useHistory} from 'react-router-dom';
import {useQuery} from '@apollo/client';

import {GET_CLIENT_SEARCH} from '../graphql/queries';

const useCustomerList = (props = {}) => {
    const {customerId = null} = props;
    const history = useHistory();
    const clientsSearch = useQuery(
        GET_CLIENT_SEARCH, 
        customerId ? 
            {variables: {ids: [parseInt(customerId)]}} :
            null
        );

    const customers = useMemo(() => {
        return clientsSearch &&
        clientsSearch.data &&
        clientsSearch.data.clientsSearch &&
        clientsSearch.data.clientsSearch.results ?
            clientsSearch.data.clientsSearch.results : [];
    }, [clientsSearch]);

    const toCustomerEdit = (customerId) => {
        history.push(`/customer/${customerId}`);
    };

    const toCreate = () => {
        history.push('/customer');
    };
        
    return {
        customers,
        toCustomerEdit,
        toCreate,
    };
};

export default useCustomerList;
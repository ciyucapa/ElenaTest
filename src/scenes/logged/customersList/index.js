import useCustomersList from '../../../hooks/useCustomersList';
import CustomersList from './customerList';

/**
 * Lista de clientes.
 */
 const List = () => {
    const hook = useCustomersList();
    console.log(hook)
    return <CustomersList {...hook} />;
};

export default List;
import useCustomersCreate from '../../../hooks/useCustomersCreate';
import CustomersCreate from './customersCreate';

/**
 * Crear de clientes.
 */
 const Create = () => {
    const hook = useCustomersCreate();
    return <CustomersCreate {...hook} />;
};

export default Create;
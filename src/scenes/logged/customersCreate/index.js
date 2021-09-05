import useCustomersCreate from '../../../hooks/useCustomersCreate';
import CustomersCreate from './customersCreate';

/**
 * Crear de clientes.
 */
 const Create = () => {
    const hook = useCustomersCreate();
    console.log(hook)
    return <CustomersCreate {...hook} />;
};

export default Create;
import useCustomersEdit from '../../../hooks/useCustomersEdit';
import CustomersCreate from '../customersCreate/customersCreate';

/**
 * Editar cliente.
 */
 const Edit = () => {
    const hook = useCustomersEdit();
    return <CustomersCreate {...hook} />;
};

export default Edit;
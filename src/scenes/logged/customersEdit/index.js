import React from 'react';

import useCustomersEdit from '../../../hooks/useCustomersEdit';
import Form from '../customersCreate/form';

/**
 * Editar cliente.
 */
 const Edit = () => {
    const hook = useCustomersEdit();
    return <Form {...hook} />;
};

export default Edit;
import React from 'react';
import useCustomersCreate from '../../../hooks/useCustomersCreate';

import Form from './form';

/**
 * Crear de clientes.
 */
 const Create = () => {
    const hook = useCustomersCreate();
    return <Form {...hook} />;
};

export default Create;
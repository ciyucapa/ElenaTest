import useLogin from '../../../hooks/useLogin';

import Form from './components/form';

/**
 * Componente login
 */
const Login = () => {
    const hook = useLogin();
    return <Form {...hook} />;
};

export default Login;
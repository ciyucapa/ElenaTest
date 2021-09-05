import {useState, useCallback, useEffect, useMemo} from 'react';
import {useHistory} from "react-router-dom";
import {useMutation} from '@apollo/client';

import {useUser} from '../hooks';
import {LOGIN} from '../graphql/mutations';

const useLogin = () => {
    const history = useHistory();
    const {user, updateUser} = useUser();

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setError] = useState(false);
    const [isSuccesfull, setSuccesfull] = useState(false);
    
    const [Login, result] = useMutation(LOGIN);

    useEffect(() => {
        if (user) {
            history.push("/");
        }
    }, [user, history]);

    useEffect(() => {
        if (result && result.data && !user) {
            if (result.data.login && result.data.login.user) {
                setSuccesfull(true);
                updateUser({
                    ...result.data.login.user,
                    authToken: result.data.login.token,
                });
            }

            if (
                result.data.login &&
                result.data.login.__typename &&
                result.data.login.__typename === 'ValidationErrors'
            ) {
                setError(true);
            }
        }
    }, [result, user, updateUser]);

    const changePhone = (event) => {
      setPhone(event.target.value);
      setError(false);
    };

    const changePassword = (event) => {
      setPassword(event.target.value);
      setError(false);
    };

    const isValidForm = useMemo(() => 
        (phone !== '' && password !== '' && !isError),
        [phone, password, isError]
    );

    const login = useCallback(async () => {
        try {
            Login({variables: {cellphone: phone, password}});
        } catch (error) {
            setError(true);
        }
    }, [phone, password, Login]);

    return {
        isSuccesfull,
        phone,
        password,
        isValidForm,
        isError,
        changePhone,
        changePassword,
        login,
    };
};

export default useLogin;
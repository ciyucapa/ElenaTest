import {useState, useMemo, useCallback} from 'react';
import {useMutation} from '@apollo/client';

import {updateCacheCreateCustomer} from '../utils';
import {CREATE_CLIENT, UPDATE_CLIENT} from '../graphql/mutations';
import useStates from '../hooks/useStates';

const useCustomerCreate = (props = {}) => {
    const {customerId = null} = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    const {states} = useStates();

    const [CreateClient, resultCreateClient] = useMutation(CREATE_CLIENT, updateCacheCreateCustomer);
    const [UpdateClient, resultUpdateClient] = useMutation(UPDATE_CLIENT);

    const onChangeFirstName = (event) => {
        setFirstName(event.target.value);
    };

    const onChangeLastName = (event) => {
        setLastName(event.target.value);
    };

    const onChangeCellphone = (event) => {
        setCellphone(event.target.value);
    };

    const onChangeStreetAddress = (event) => {
        setStreetAddress(event.target.value);
    };

    const onChangeCountry = (event) => {
        setCountry(event.target.value);
    };

    const onChangeState = (event) => {
        setState(event.target.value);
    };

    const onChangeCity = (event) => {
        setCity(event.target.value);
    };

    const isValidForm = useMemo(() => (
        firstName &&
        lastName && 
        cellphone && 
        streetAddress && 
        country && 
        state && 
        city
    ), [
        firstName, 
        lastName, 
        cellphone, 
        streetAddress, 
        country, 
        state, 
        city,
    ]);

    const stateShortCode = useMemo(() => {
        let code = '';
        
        if (state) {
            states.some((item) => {
                let validation = state == item.value;

                if (validation) {
                    code = item.shortCode;
                }

                return validation;
            });
        }

        return code;
    }, [state, states]);

    const cities = useMemo(() => {
        let data = [];
        
        if (state) {
            states.some((item) => {
                let validation = state == item.value;

                if (validation) {
                    data = item.cities.map((cityItem) => ({
                        ...cityItem,
                        value: cityItem.id,
                        label: cityItem.name,
                    }));
                }

                return validation;
            });
        }

        return data;
    }, [state, states]);

    const cityLabel = useMemo(() => {
        let data = '';

        cities.some((cityItem) => {
            let validation = city == cityItem.id;

            if (validation) {
                data = cityItem.name;
            }

            return validation;
        });

        return data;
    }, [city]);

    const onClick = useCallback(async () => {
        try {
            let event = CreateClient;
            let variables = {
                input: {
                    firstName,
                    lastName,
                    cellphone,
                    address: {
                        streetAddress,
                        stateShortCode,
                        stateId: parseInt(state, 10),
                        country,
                        cityId: parseInt(city, 10),
                        city: cityLabel,
                    },
                },
            };

            if (customerId) {
                event = UpdateClient;
                variables['id'] = parseInt(customerId)
            }

            await event({variables})
            window.location.replace('/');
        } catch (error) {
            console.log(error);
        }
    }, [
        firstName, 
        lastName, 
        cellphone, 
        customerId,
        streetAddress, 
        country,
        state,
        city,
    ]);

    const updateFormCustomer = (customer) => {
        setCellphone(customer.cellphone);
        setFirstName(customer.firstName);
        setLastName(customer.lastName);
        setState(customer.state.id);
        setStreetAddress(customer.address);

        customer.state.cities.some((cityItem) => {
            const validation = cityItem.name == customer.city;

            if (validation) {
                setCity(cityItem.id);
            }

            return validation;
        });
    };

    return {
        firstName,
        lastName,
        cellphone,
        streetAddress,
        country,
        isValidForm,
        states,
        state,
        cities,
        city,
        updateFormCustomer,
        onChangeFirstName,
        onChangeLastName,
        onChangeCellphone,
        onChangeStreetAddress,
        onChangeCountry,
        onChangeState,
        onChangeCity,
        onClick,
    };
};

export default useCustomerCreate;
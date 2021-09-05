import {useMemo} from 'react';
import {useQuery} from '@apollo/client';

import {GET_STATE} from '../graphql/queries';

const useStates = () => {
    const {data} = useQuery(GET_STATE);

    const states = useMemo(() => {
        return data && data.states ? 
            data.states.map((state) => {
                return {
                    ...state,
                    label: state.name,
                    value: state.id,
                };
            }) : 
            [];
    }, [data])

    return {
        states,
    };
};

export default useStates;
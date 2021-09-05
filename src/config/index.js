import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

import {API_URL} from './constants';

const httpLink = createHttpLink({
    uri: API_URL,
});

const authLink = setContext(async (_, {headers}) => {
    let authHeaders = {headers};

    try {
        const user = JSON.parse(localStorage.getItem('USER'));

        if (user) {
            authHeaders = {
                headers: {
                    ...headers,
                    authorization: user.authToken ? `Token ${user.authToken}` : '',
                },
            };
        }
    } catch (error) {}

    return authHeaders;
});

export const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
        addTypename: true,
    })
});
import {gql} from '@apollo/client';

export const AUTH_FIELDS = gql`
  fragment authFields on AuthInfo {
    token
    user {
        firstName
        lastName
        cellphone
    }
  }
`;

export const CLIENTS_SEARCH_FIELDS = gql`
  fragment clientsSearchFields on ClientPagination {
    currentPage
    totalPages
    results {
        id
        firstName
        lastName
        address
        cellphone
        city
        state {
            id
            name
            shortCode
            cities {
                id
                name
            }
        }
    }
  }
`;

export const CLIENT_FIELDS = gql`
  fragment clientFields on Client {
    id
    firstName
    lastName
    address
    cellphone
  }
`;
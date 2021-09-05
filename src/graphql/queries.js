import {gql} from '@apollo/client';

import {CLIENTS_SEARCH_FIELDS} from './fragments';

export const GET_STATE = gql`
query getState {
  states {
    id
    shortCode
    displayName
    name
    shippingZone {
        name
        cost
    }
    cities {
        id
        shortCode
        displayName
        name
        codAvailable
        isCapital
    }
  }
}`;

export const GET_CLIENT_SEARCH = gql`
${CLIENTS_SEARCH_FIELDS}
query getClientSearch($page: Int, $perPage: Int, $term: String, $ids: [Int!]) {
    clientsSearch(
        page: $page, 
        perPage: $perPage, 
        term: $term, 
        ids: $ids
    ){
      ...clientsSearchFields
    }
  }
`;
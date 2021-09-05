import React from 'react';
import {create} from 'react-test-renderer';

import List from '../../../../../src/scenes/logged/customersList/customerList';

describe('Customer list component', () => {
    test('render Customer list component', () => {
        const tree = create(
            <List
                customers={[
                    {
                        address: 'Address',
                        cellphone: 'Phone',
                        city: 'City',
                        firstName: 'First Name',
                        lastName: 'Last Name'
                    },
                    {
                        address: 'Address 2',
                        cellphone: 'Phone 2',
                        city: 'City 2',
                        firstName: 'First Name 2',
                        lastName: 'Last Name 2'
                    },
                ]}
            />,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
import React from 'react';
import {create} from 'react-test-renderer';

import Form from '../../../../../src/scenes/logged/customersCreate/form';

describe('Customer create form component', () => {
    test('render Customer create form component', () => {
        const tree = create(
            <Form
                firstName="Test"
                lastName="Lastname test"
                cellphone="+578484545"
                streetAddress="Address"
                country="test"
                isValidForm={false}
            />,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
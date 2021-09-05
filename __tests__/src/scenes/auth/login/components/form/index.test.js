import React from 'react';
import {create} from 'react-test-renderer';

import Form from '../../../../../../../src/scenes/auth/login/components/form';

describe('Login form component', () => {
    test('render login form component', () => {
        const tree = create(
            <Form
                isValidForm
                phone="+5748545852"
                password="123456789"
            />,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
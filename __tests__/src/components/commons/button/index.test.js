import React from 'react';
import {create} from 'react-test-renderer';

import Button from '../../../../../src/components/commons/button';

describe('Button component', () => {
    test('render button component', () => {
        const tree = create(
            <Button
                disabled
                onClick={() => {}}
                text="button title"
            />,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
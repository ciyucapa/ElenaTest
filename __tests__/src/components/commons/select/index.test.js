import React from 'react';
import {create} from 'react-test-renderer';

import Select from '../../../../../src/components/commons/select';

describe('Select component', () => {
    test('render select component', () => {
        const tree = create(
            <Select
                value={'A'} 
                onChange={() => {}}  
                options={[
                    {
                        value: 'A',
                        label: 'CASE A',
                    },
                    {
                        value: 'B',
                        label: 'CASE B',
                    },
                ]}
            />,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
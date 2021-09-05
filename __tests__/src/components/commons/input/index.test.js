import React from 'react';
import {create} from 'react-test-renderer';

import Input from '../../../../../src/components/commons/input';

describe('Input component', () => {
    test('render input component', () => {
        const tree = create(
            <Input
                type={'text'} 
                value={'value input'} 
                onChange={() => {}}  
                placeholder={'input placeholder'}
            />,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
import React from 'react';
import {create} from 'react-test-renderer';

import Text from '../../../../../src/components/commons/text';

describe('Text component', () => {
    test('render text component', () => {
        const tree = create(
            <Text text={'Text'} />,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
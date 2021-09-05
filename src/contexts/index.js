import React from 'react';
import PropTypes from 'prop-types';

import sg from '../config/singlenton';
import userContext from '../contexts/user';

const Contexts = (props) => {
    const {children} = props;
    const {UserProvider, useUser} = userContext();

    sg.getInstance().setConfiguration({useUser});

    return (
        <UserProvider>
            {children}
        </UserProvider>
    );
};

Contexts.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Contexts;
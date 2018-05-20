import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';


function TabItemContainer(props) {
    return (
        <Typography component="div" style={{ padding: 4 }}>
            {props.children}
        </Typography>
    );
}

export default TabItemContainer;
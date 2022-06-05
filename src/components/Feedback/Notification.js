import React from "react";
import PropTypes from 'prop-types';

function Notification({ message}) {
    return (
        <p>{message}</p>
)    
};

Notification.protoType = {
    message:PropTypes.string.isRequired
};

export default Notification;
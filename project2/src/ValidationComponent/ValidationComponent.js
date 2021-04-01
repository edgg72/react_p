import React from 'react';

let txtResponse;

const Validation = (props) => {
    props.len >= 5 ? txtResponse = 'Text long enough' : txtResponse = 'Text too short'
    return (
        <p>{txtResponse}</p>
    );
}

export default Validation
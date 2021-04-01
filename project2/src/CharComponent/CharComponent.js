import React from 'react';

const Char = (props) => {
    
    return (
        <div className="CharComponent" onClick={props.click}>
            {props.letter}
        </div>
    );
}

export default Char;
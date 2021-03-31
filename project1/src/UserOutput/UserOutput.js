import React from 'react';
import './UserOutput.css'


const UserOutput = (props) => {
    return (
        <div className='userOutput'>
            <p>Some random text</p>
            <p>I hope I'll be overwritten by {props.name}</p>
        </div>
    )
}

export default UserOutput;
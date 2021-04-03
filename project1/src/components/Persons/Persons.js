import React from 'react';
import Person from './Person/Person'

const persons = (props) => props.persons.map((prsn, index) => {
    return  <Person
    click={() => props.clicked(index)}
    name={prsn.name}
    age={prsn.age}
    key={prsn.id}
    changed={(event) => props.changed(event, prsn.id)}/>
})

export default persons;
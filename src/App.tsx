import React from 'react';
import './App.css';
// Import components from components folder 
import { Greet } from './components/components4.18/Greet';
import { Person } from './components/components4.18/Person'
import { PersonList } from './components/components4.18/PersonList';
import { Status } from './components/components4.18/Status'
import { Heading } from './components/components4.18/Heading'
import { Oscar } from './components/components4.18/Oscar'
import { Button } from './components/components4.18/Button'
import { Input } from './components/components4.18/Input'
import { Container } from './components/Container'

// Entry point in react app
function App() {
  // This object is passed in as the props param for the 
  // Person component
  const personName = {
    first: 'Me',
    last: 'too'
  }

  // nameList is an array of objects, which all have 
  // first and last as properties.
  // Passed in as the props param for the PersonList 
  // component
  const nameList = [
    {
      first: "Bruce ",
      last: "Wayne"
    },
    {
      first: "Michael",
      last: "Jackson"
    },
    {
      first: "Princess",
      last: "Diana"
    }
  ]
  // App function returns elements organizing
  // components
  return (
    <div className="App"> 
    {/* Greet Component w/ string, number and boolean properties*/}
      <Greet 
      name="Mike" 
      messageCount={10}
      isLoggedIn={true}
      /> 
    {/* Person Component w/ object property */}
      <Person
      name={personName}
      />
    {/* PersonList Component w/ list property */}
      <PersonList
      names={nameList}
      />
    {/* Status Component w/ string properties with union */}
      <Status
      status='loading'
      />
    {/* Oscar Component w/ children prop */}
      <Oscar>
      < Heading> Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
    {/* Greet Component w/ optional prop */}
      <Greet
      name='Who'
      isLoggedIn={false}/>
      {/* Button Component w/ event prop (multiple properties) */}
      <Button handleClick={(event, id) => {
        console.log('Button Clicked', event, id)
      }}
        />
      {/* Input Component w/ event prop (single property) */}
      <Input value='' handleChange={(event) => console.log(event)}/>
      {/* Container Component w/ styles prop */}
      <Container styles={{ border: '1px solid black', padding: '1rem' }}/>
    </div>
  ); 
}

export default App;

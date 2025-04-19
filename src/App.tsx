import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person'
import { PersonList } from './components/PersonList';
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Button } from './components/Button'
import { Input } from './components/Input'



function App() {
  const personName = {
    first: 'Me',
    last: 'too'
  }

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
  return (
    <div className="App"> 
      <Greet 
      name="Mike" 
      messageCount={10}
      isLoggedIn={true}
      />
      <Person
      name={personName}
      />
      <PersonList
      names={nameList}
      />
      <Status
      status='loading'
      />
      
      <Oscar>
      < Heading> Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet
      name='Who'
      isLoggedIn={false}/>
      <Button handleClick={(event, id) => {
        console.log('Button Clicked', event, id)
      }}
        />
      <Input value='' handleChange={(event) => console.log(event)}/>
    </div>
  ); 
}

export default App;

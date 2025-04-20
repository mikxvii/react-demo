import React from 'react';
import './App.css';
// Import components from components folder 
import { Greet } from './components/Greet';
import { Person } from './components/Person'
import { PersonList } from './components/PersonList';
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Container } from './components/Container'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { Box } from './components/context/Box'
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { Counter } from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber'
import { Toast } from './components/templateliterals/Toast'
import { CustomButton } from './components/html/Button'

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

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>

      <Counter message='the count value is'/>

      <Private isLoggedIn={true} component={Profile} />

      {/* <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[1, 5, 7, 8]}
        onClick={(item) => console.log(item)}
      /> */}
      <List
        items={[
          {
            id: 1,
            first: "Bruce ",
            last: "Wayne"
          },
          {
            id: 2,
            first: "Michael",
            last: "Jackson"
          },
          {
            id: 3,
            first: "Princess",
            last: "Diana"
          }
        ]}
        onClick={(item) => console.log(item)}
      />

      <RandomNumber value={10} isPositive />

      <Toast position='center'/>

      <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
        Primary Button
      </CustomButton>
    </div>
  ); 
}

export default App;

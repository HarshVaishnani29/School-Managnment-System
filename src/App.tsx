import React from 'react';
import './App.css'
import { bg } from './components/global';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { Personlist } from './components/Personlist'
import { Status } from './components/Status'
import Header from './components/Header';
import { Layout } from './components/Layout';
import ScrollProgress from './components/Scroll';
import { Route, Router } from 'react-router-dom';



function App() {

  const personName={
    first:'Harsh',
    last:'Patel',
  }
  const nameList=[
    {
      first:'Harsh',
      last:'Patel'
    },
    {
      first:'Viren',
      last:'Asodariya'
    },
    {
      first:'Pranay',
      last:'Shah'
    }
  ]
  return (
    <>
      {/* <Greet name="Harsh" messageCount={5} isLoggedIn={false}/>
      <Person name={personName}/>
      <Personlist names={nameList} /> */}
      <ScrollProgress/> 
      <Layout/>
      <Status status={'error'}/>
    </>
  );
}

export default App;

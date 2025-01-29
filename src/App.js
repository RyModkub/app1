import React,{useRef, useState} from 'react';
import Button from './class-components';
import { Calculator2 } from './calculator';
import { Event } from './event-data';
import RefsFunc from './refs-func';
import Messagebox from './state-func';
import { userContext } from './context';
import  Content from './context-content';
import Header2 from './context-header2';
import Content2 from './context-content2';
function App() {
  let [user,setUser] = React.useState()
  return      <userContext.Provider value={[user,setUser]}>
              <Header2/>
              <Content2/>
              </userContext.Provider>
} 

export default App;

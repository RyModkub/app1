import React,{useRef} from 'react';
import Button from './class-components';
import { Calculator2 } from './calculator';
import { Event } from './event-data';
import RefsFunc from './refs-func';
import Messagebox from './state-func';
import { userContext } from './context';
import  Content from './context-content';
function App() {
  return      <userContext.Provider value={'Punyaphat'}>
              <Content/>
              </userContext.Provider>
} 

export default App;

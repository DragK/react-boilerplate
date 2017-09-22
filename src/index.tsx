import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Hello} from './components/Hello';
import * as redux from '@types/redux';


ReactDOM.render(
   <Hello compiler="TypeScript" framework="ReactJS" />,  
  document.getElementById('root'));
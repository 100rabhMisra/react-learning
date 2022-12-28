import logo from './logo.svg';
import './App.css';
import User from './User';
import ClassComponent from './ClassComponent';
import ClickEvent from './ClickEvent';
import State from './StateFunctionalComponent';
import StateClassComponent from './StateClassComponent';
import PropsFunctionComponent from './PropsFunctionalComponent.js';

import PropsClassComponent from './PropsClassComponent';

import BasicFormHandle from './BasicFormHandle';

import TurneryOperator from './TurneryOperator';

import Passfunctionasprops from './Passfunctionasprops';

function App() {

  // fucntion create for Passfunctionasprops//

  function getData(){
    alert("call Passfunctionasprops");
  }

  // 
  return (
    <div className="App">
      <h1>Hellp App </h1>
      <User/> <br/>
      
      <ClassComponent/> <br/>
      <ClickEvent/> <br/>
      <State/> <br/>
      <StateClassComponent/> <br/>
      <PropsFunctionComponent name="saurabh" age="28" study="learning" abc = "hai kya"/><br/>
      <PropsFunctionComponent name="Arti" age="27" study="learning nahi hai" abc = "hmm"/><br/>

      <PropsClassComponent name= "Data pass by props in class componet"/><br/>
      <BasicFormHandle/>

      <TurneryOperator/>

      <Passfunctionasprops   data ={()=>getData()}/>
     
    </div>
  );
}

export default App;


import { render } from '@testing-library/react';
import React, { useState } from 'react';
import './App.css';



  




  

function App() {

  const myNumber = [1,2,3,4,5,6,7,8,9,0]
  const myOperatorList=["-","+","/","X"]

  const [resultat,setMyResult]=useState(
    {currentValue:"",
    oldValue:"0",
    myOperator:""})

 
  const myTableOperateur = myOperatorList.map((operator)=>(<button onClick={()=>setMyResult({oldValue:resultat.currentValue,currentValue:""})} key={operator}>{operator}</button>))
  const myTableNumber= myNumber.map((element)=>(<button onClick={()=>setMyResult({currentValue:resultat.currentValue+element})} key={element.toString()}>{element}</button>));
  const myEqual = <button id="Equal" onClick={()=>setMyResult({currentValue:typeof(resultat.currentValue)})}>=</button>
  
  





  
  

  
  
  return (
    <div className="App">
      <header className="App-header">
        <div id="myCalculator">
          <span id="Resultat" children={resultat.currentValue} ></span>
          {myEqual}
          {myTableNumber}
          {myTableOperateur}
    </div>
      </header>
    </div>
  );
}

export default App;

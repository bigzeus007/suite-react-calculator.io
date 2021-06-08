
import { render } from '@testing-library/react';
import React, { useState } from 'react';
import './App.css';



function App() {

  const myNumber = [1,2,3,4,5,6,7,8,9,0]
  const myOperatorList=["-","+","/","X"]

  const [resultat,setMyResult]=useState({
    Affichage:0,
    currentValue:"",
    oldValue:0,
    myOperator:""})
 
  const myTableOperateur = myOperatorList.map((operator)=>(<button onClick={()=>myClickOperator(operator)} key={operator}>{operator}</button>))
  const myTableNumber= myNumber.map((element)=>(<button onClick={()=>setMyResult({...resultat,currentValue:(resultat.currentValue+element.toString()),Affichage:(resultat.currentValue+element)})} key={element}>{element}</button>))
  const myEqual = <button id="Equal" onClick={()=>{checkMyOperator()}}>=</button>
  
  
  function myClickOperator(operator) {
    if (resultat.oldValue===0) {
      setMyResult({...resultat,myOperator:operator,oldValue:resultat.Affichage,currentValue:""});
      
    } else {
      let tompon = resultat.myOperator;
      checkMyOperator(); 
      console.log(tompon + resultat.Affichage)
      //setMyResult({...resultat,myOperator:tompon,oldValue:resultat.Affichage,currentValue:""});
    } 
  }
  



  function checkMyOperator() {
    console.log(resultat.myOperator)
    if (resultat.myOperator!==""&&resultat.oldValue!==""&&resultat.currentValue!=="") {
     if (resultat.myOperator==="+") {
      setMyResult({
        Affichage:Number(resultat.oldValue)+Number(resultat.currentValue),
        currentValue:"",
        oldValue:0,
        }

      )
     }
     if (resultat.myOperator==="X") {
      setMyResult({
        Affichage:Number(resultat.oldValue)*Number(resultat.currentValue),
        currentValue:"",
        oldValue:0,
        }

      )
     }  
     if (resultat.myOperator==="-") {
      setMyResult({
        Affichage:Number(resultat.oldValue)-Number(resultat.currentValue),
        currentValue:"",
        oldValue:0,
        }

      )
     } 
     if (resultat.myOperator==="/") {
      setMyResult({
        Affichage:Number(resultat.oldValue)/Number(resultat.currentValue),
        currentValue:"",
        oldValue:0,
        }

      )
     } 
      
    }

  
    
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
        <div id="myCalculator">
          <span id="Resultat" children={resultat.Affichage} ></span>
          {myEqual}
          {myTableNumber}
          {myTableOperateur}
    </div>
      </header>
    </div>
  );
}

export default App;

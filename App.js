import React from "react";
import Button from "./components/Button";
import Screen from "./components/Screen";
import { useState, createContext } from "react";

function App() {
  const btnValues = [
    "C",
    "+-",
    "%",
    "/",
    7,
    8,
    9,
    "X",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];
  const [calc, setCalc] = useState({sign: "", num: 0, res: 0})
  function numClickHandler(event){
    event.preventDefault()
    const typedValue = Number(event.target.value)
    setCalc({...calc, num: calc.num === 0 && typedValue === 0 ? 0 : calc.num === 0 ? typedValue : Number(String(calc.num) + String(typedValue)), sign: !calc.sign ? 0 : calc.sign}) // changed from calc.sign to calc.num
  }
  function signClickHandler(event){
    event.preventDefault()
    const typedSign = event.target.value
    setCalc({...calc, sign: String(typedSign), res: Number(calc.num), num: 0})
  }
  function equalsClickHandler(event){
    if(calc.sign && calc.num){
      const math = (a, b, sign) => {
        let output;
        if(sign==="+"){
          output = a + b
        }
        if(sign==="-"){
          output = a - b
         }
        if(sign === "X"){
          output = a * b
        }
        if(sign === "/"){
          output = a / b
        }
        return output
      }
      setCalc({...calc, num: math(calc.res, calc.num, calc.sign), res: 0, sign: ""})
    }
  }
  function resetClickHandler(e){
    e.preventDefault()
    setCalc({sign: "", num: 0, res: 0})
  }
  function invertClickHandler(e){
    e.preventDefault()
    setCalc({...calc, num: -calc.num})
  }
  function percentClickHandler(e){
    e.preventDefault()
    setCalc({...calc, num: calc.num * 100})
  }
  function decimalClickHander(e){
    e.preventDefault()
    setCalc({...calc, num: String(calc.num + ".")})
  }
  const CalcContext = createContext();
  return (
    <>
      <div className="wrapper">
        <CalcContext.Provider value={calc}>
        <Screen value={calc.num}/>
        <div className="buttonBox">
        {btnValues.map((btn) => <Button onClick={btn === "=" ? equalsClickHandler : btn === "C" ? resetClickHandler : btn === "+-" ? invertClickHandler : btn === "%" ? percentClickHandler : btn === "." ? decimalClickHander : (btn === "+" || btn === "-" || btn === "X" || btn === "/") ? signClickHandler : numClickHandler} className={btn === "=" ? "equals" : ""} value={btn} />)}
        </div>;
        </CalcContext.Provider>
      </div>
    </>
  );
}

export default App;

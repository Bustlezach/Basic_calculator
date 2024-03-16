import React, {useState} from "react";
import './calculator.css';

function Calculator() {
  const [calc, setCalc] = useState({
    current: '0',
    total: '0',
    isInitial: true,
    operator: "",
  });

  const handleNumber = (value) => {
    let newValue = calc.isInitial
      ? value
      : calc.current.concat(value);
    setCalc(prev => {
      return {
        ...prev,
        current: newValue,
        isInitial: false,
      }
    });
  };

  const renderCalc = () => calc.current;

  const doCalculation = () => {
    let total = parseInt(calc.total);
    switch(calc.operator) {
      case '+':
        total += parseInt(calc.current)
        break;
      case '-':
        total -= parseInt(calc.current)
        break;
      case '*':
        total *= parseInt(calc.current)
        break;
      case '/':
        total /= parseInt(calc.current)
        break;
        default:
          total = parseInt(calc.current)
    }
    return total;
  };
  
  const handleOperator = (val) => {
    let total = doCalculation();
    setCalc(prev => {
      return {
        current: total.toString(),
        total: total.toString(),
        isInitial: true,
        operator: val,
      }
    });
  };

  const handleClear = () => {
    setCalc(prev => {
      return {
        current: '0',
        total: '0',
        isInitial: true,
        operator: "",
      };
    });
  };

  const handleEquals = () => {
    let total = doCalculation();
    setCalc(prev => {
      return {
        current: total.toString(),
        total: total.toString(),
        isInitial: true,
        operator: '=',
      }
    });
  };

  return(
    <div className='calculator'>
      <div className='display'>{renderCalc()}</div>
      <CalButton val='7' onClick={handleNumber} />
      <CalButton val='8' onClick={handleNumber} />
      <CalButton val='9' onClick={handleNumber} />
      <CalButton className='operator' val='/' onClick={handleNumber}/>
      <CalButton val='4' onClick={handleNumber} />
      <CalButton val='5' onClick={handleNumber} />
      <CalButton val='6' onClick={handleNumber} />
      <CalButton className='operator' val='*' onClick={handleOperator} />
      <CalButton val='1' onClick={handleNumber} />
      <CalButton val='2' onClick={handleNumber} />
      <CalButton val='3' onClick={handleNumber} />
      <CalButton className='operator' val='-' onClick={handleOperator} />
      <CalButton val='C' onClick={handleClear} />
      <CalButton val='0' onClick={handleNumber} />
      <CalButton val='=' onClick={handleEquals} />
      <CalButton className='operator' val='+' onClick={handleOperator} />
    </div>
  );
}

function CalButton({val, className, onClick}){
  return <button className={className} onClick={() => onClick(val)}>{val}</button>
}



function App() {
  return (
    <div className='app-container'>
      <Calculator />
    </div>
  );
}

export default App;

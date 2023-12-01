import { useState } from 'react'
import './App.css'
import Die from './Die'
import { useCallback } from 'react'
import { useMemo } from 'react'


function App() {
  let [diceValues, setDiceValues] = useState([0, 0, 0]);
  
  const handleRoll = useCallback( (newValue: number, index:number) => {
    const newValues = [...diceValues];
    newValues[index] = newValue
    setDiceValues(newValues)
  }, [diceValues])

  // const handleRoll1 = useCallback( (newValue: number) => {
  //   const newValues = [...diceValues];
  //   newValues[1] = newValue
  //   setDiceValues(newValues)
  // }, [diceValues])

  // const handleRoll2 = useCallback( (newValue: number) => {
  //   const newValues = [...diceValues];
  //   newValues[2] = newValue
  //   setDiceValues(newValues)
  // }, [diceValues])

  console.log(diceValues);

  const sum = useMemo(
    () => {
        if(diceValues.length>0) {
            return diceValues.reduce(function (acc, obj) {
                return acc+obj;
              });
        }
        else {
            return 0;
        }
    }
    , [diceValues]
);

  return (
    <>
      <div>
        <p>sum: {sum}</p>
        <div className="values">
          {diceValues.map( (val, index) => (
            <Die key={index} onRoll={handleRoll} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App

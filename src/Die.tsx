import { useState } from "react";
import { useCallback } from "react";
const Die = (props: {onRoll?: (newValue: number, index: number) => void}) => {
    let [value, setValue] = useState(Math.floor(Math.random()*6+1));
    //let count = 0;
    const roll = useCallback(
        (index: number) => {
            const newVal = Math.floor(Math.random()*6+1)
            props.onRoll && props.onRoll(newVal, index)
            setValue(newVal)
        }
        , []
    );
    return (
        <div onClick={roll}>
            <p>Valeur : {value}</p>
        </div>
    );
};

export default Die;
import React from 'react';
import output from "./Output";

const Input = ({setOutput, output, first, setFirst, second, arr, setArr, value, setValue}) => {

    const clear = () => {
        setOutput('')
        setValue()
    }
    const addNumber = (number) => {
       setOutput((output==='0')?number:output+number)
    }
    const plus = () => {
        if (output.includes(' +')) {
            console.log('ccc')
            return
        }
        setArr(arr => [...arr, value])
        setValue()
        setOutput(output + ' + ' )
    }
    const result = () => {
        setArr(arr => [...arr, value])
        switch (output) {
            case output.includes('+'): let sum = value.reduce((a, b) => a + b, 0)
                setOutput(sum)
            default: return
        }
    }

    return (
        <div className="buttons">
            <button className="btn" onClick={()=>addNumber("1")}>1</button>
            <button className="btn" onClick={()=>addNumber("2")}>2</button>
            <button className="btn" onClick={()=>addNumber("3")}>3</button>
            <button className="btn" onClick={()=>addNumber("4")}>4</button>
            <button className="btn" onClick={()=>addNumber("5")}>5</button>
            <button className="btn" onClick={()=>addNumber("6")}>6</button>
            <button className="btn" onClick={()=>addNumber("7")}>7</button>
            <button className="btn" onClick={()=>addNumber("8")}>8</button>
            <button className="btn" onClick={()=>addNumber("9")}>9</button>
            <button className="btn" onClick={()=>addNumber("0")}>0</button>
            <button className="btn" onClick={plus}>+</button>
            <button className="btn">-</button>
            <button className="btn">*</button>
            <button className="btn">&#247;</button>
            <button className="btn" onClick={clear}>C</button>
            <button className="btn" onClick={result}>=</button>
        </div>
    );
};

export default Input;

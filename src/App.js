import './App.css';
import Input from "./components/Input";
import Output from "./components/Output";
import {useState} from "react";

function App() {

  const [output, setOutput] = useState('0')
  const [value, setValue] = useState(0)
  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')
  const [arr, setArr] = useState([])


  return (
    <div className={`container`}>
        <div className="calculator">
            <Output
                output={output}
            />
            <Input
                setOutput={setOutput}
                output={output}
                arr={arr}
                setArr={setArr}
                value={value}
                setValue={setValue}
                setFirst={setFirst}
            />
        </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import Child from "./Child";

function ParentToChildDemo(){
    const [count, setCount] = useState(0);
    return (
        <div style={{background: "cyan", padding: "30px"}}>
            <h3>Parent To Child Comminication Demo</h3>
            <h3>Current Count is: {count}</h3>
            <button onClick={()=>setCount(count + 1)}>Increment</button>
            <Child count = {count}></Child>
        </div>
    )
}
export default ParentToChildDemo;
import { useState } from "react";

function CounterApp(){
    const [count, setCount] =  useState(0);
    return (
        <div>
            <h3>Counter App</h3>
            <div>
                <h3>Current Count is: {count}</h3>
            </div>
            <div>
                <button onClick={()=>setCount(count + 1)}>Increment</button>
                <button onClick={()=>setCount(count - 1)}>Decrement</button>
                <button onClick={()=>setCount(0)}>Reset</button>
            </div>
        </div>
    )
}
export default CounterApp;
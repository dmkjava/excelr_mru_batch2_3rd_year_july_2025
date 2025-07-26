import { useState } from "react";
function Child(props){
    const [count, setCount] = useState(0);
    const increment = ()=>{
        setCount(count + 1);
        props.getCount(count + 1);
    }
    console.log("Child");
    console.log(props);
    return (
        <div style={{background: "yellow", padding: "30px"}}>
            <h3>Child Component</h3>
            <h3>Current Count is: {count}</h3>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default  Child;
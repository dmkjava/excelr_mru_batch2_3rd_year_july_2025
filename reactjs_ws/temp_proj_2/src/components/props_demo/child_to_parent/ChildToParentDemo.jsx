import { useState } from "react";
import Child from "./Child";
function ChildToParentDemo(){
    const [pcount, setPCount] = useState(0);
    const getCount = (count)=>{
        setPCount(count);
    }
    return (
        <div style={{background: "cyan", padding: "30px"}}>
            <h3>Child to Parent Communication Demo - Lifting State Up</h3>
            <h3>Current Count is: {pcount}</h3>
            <Child getCount={getCount}></Child>
        </div>
    )
}
export default  ChildToParentDemo;
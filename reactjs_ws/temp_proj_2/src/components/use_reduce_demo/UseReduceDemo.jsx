import { useReducer } from "react";

const init_count = 10; 
const counterReducer = (state, action)=>{
    console.log("state " + state);
    console.log("action: "+ action);
    if(action == "increment"){
        return state + 1;
    }else if(action == "decrement"){
        return state - 1;
    }else if(action == "reset"){
        return 0;
    }else {
        return state;
    }
}
function UseReduceDemo(){
    const [count, dispatch] = useReducer(counterReducer, init_count)
    return (
        <div>
            <h3>useReduce() hook demo using counter</h3>
            <h3>Current Count is: {count }</h3>
            <div>
                <button onClick={()=>dispatch("increment")}>Increment</button>
                <button onClick={()=>dispatch("decrement")}>Decrement</button>
                <button onClick={()=>dispatch("reset")}>Reset</button>
            </div>
        </div>
    )
}
export default UseReduceDemo;

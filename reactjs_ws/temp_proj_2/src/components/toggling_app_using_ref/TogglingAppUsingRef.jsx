import { useRef } from 'react';
import './TogglingAppUsingRef.css'
function TogglingAppUsingRef(){
    const boxRef = useRef();
    const toggler = ()=>{
        console.log(boxRef);
        boxRef.current.classList.toggle('box');
    }
    return (
        <div>
            <h3>Toggling App using useRef() hook</h3>
            <div className="box" ref={boxRef}>

            </div>
            <div>
                <button onClick={toggler}>Hide And Show</button>
            </div>
        </div>
    )
}
export default TogglingAppUsingRef;
import { useState } from 'react';
import './TogglingApp.css'

function TogglingApp(){
    const [toggler, setToggler] =  useState(false);
    return (
        <div>
            <h3>Toggling App</h3>
            {toggler ==  true && 
                <div className="box">
                </div>
            }
            <div>
                <button onClick={()=>setToggler(!toggler)}>Hide and Show</button>
            </div>
        </div>
    )
}

export default TogglingApp;
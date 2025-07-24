import { useState } from "react";


function ArithmeticApp(){
    const [firstNo, setFirstNo] =  useState('20'); 
    const [secondNo, setSecondNo] = useState(''); 
    const [result, setResult] = useState('');
    return (
        <div>
            <h3>Arithmetic App</h3>  
            <div>
                <div className="col-3 text-start mx-auto">
                    <div>
                        <label htmlFor="">First No:</label>
                        <input type="number" className="form-control"
                            value={firstNo}
                            onChange ={e=>setFirstNo(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Second No:</label>
                        <input type="number" className="form-control"
                            value={secondNo}
                            onChange ={e=>setSecondNo(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Result:</label>
                        <input type="number" className="form-control"
                            value={result}
                            readOnly
                        />
                    </div>
                    <div className="my-4 text-center">
                        <button className="btn btn-primary"
                            onClick={()=>setResult(Number.parseInt(firstNo) + 
                                Number.parseInt(secondNo))}
                        >Add</button>
                        <button className="btn btn-primary"
                            onClick={()=>setResult(firstNo - secondNo)}
                        >Sub</button>
                        <button className="btn btn-primary"
                            onClick={()=>setResult(firstNo * secondNo)}
                        >Mult</button>
                        <button className="btn btn-primary" 
                            onClick={()=>setResult(firstNo / secondNo)}
                        >Div</button>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default ArithmeticApp;
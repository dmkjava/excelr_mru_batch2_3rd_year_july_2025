
import { useEffect } from 'react';
import idly from '../../assets/hotel/imgs/idly.jpeg';
import useTitle from './use_title';
function Idly(){
    // useEffect(()=>{
    //     document.title = "Idly";
    // }, [])
    useTitle("Idly");
    return (
        <div>
            <h3>Idly</h3>
            <img src={idly}
                alt="img" 
                style={{width: "300px"}}
            />
            <h3>50  &#8377;</h3>
        </div>

    )
}

export default Idly;
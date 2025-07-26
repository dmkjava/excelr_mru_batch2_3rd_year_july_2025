import { useEffect } from 'react';
import puri from '../../assets/hotel/imgs/puri.jpeg';
import useTitle from './use_title';

function Puri(){
    // useEffect(()=>{
    //             document.title = "Puri";
    //         }, [])
    useTitle("Puri");
    return (
        <div>
            <h3>Puri</h3>
            <img src={puri} 
                alt="" 
                style={{width: "300px"}}
            />
            <h3>70 &#8377;</h3>
        </div>

    )
}

export default Puri;
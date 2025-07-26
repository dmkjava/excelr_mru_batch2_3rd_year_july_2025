import { useEffect } from 'react';
import upma from '../../assets/hotel/imgs/upma.jpeg';
import useTitle from './use_title';

function Upma(){
    // useEffect(()=>{
    //                 document.title = "Upma";
    //             }, [])
    useTitle("Upma");
    return (
        <div>
            <h3>Upma</h3>
            <img src={upma}
                alt="" 
                style={{width: "300px"}}
            />
            <h3>40  &#8377;</h3>
        </div>

    )
}

export default Upma;
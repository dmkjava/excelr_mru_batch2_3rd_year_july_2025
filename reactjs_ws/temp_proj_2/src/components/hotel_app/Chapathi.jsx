import { useEffect } from 'react';
import chapathi from '../../assets/hotel/imgs/chapathi.jpeg';
import useTitle from './use_title';

function Chapathi(){
    // useEffect(()=>{
    //     document.title = "Chapathi";
    // }, [])
    useTitle("Chapathi");
    return (
        <div>
            <h3>Chapathi</h3>
            <img src={chapathi}
                alt="" 
                style={{width: "300px"}}
            />
            <h3> 70  &#8377;</h3>
        </div>

    )
}

export default Chapathi;
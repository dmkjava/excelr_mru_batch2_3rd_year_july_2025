import { useEffect } from 'react';
import mysore_bonda from '../../assets/hotel/imgs/mysore_bonda.jpeg';
import useTitle from './use_title';

function MysoreBonda(){
    // useEffect(()=>{
    //         document.title = "MysoreBonda";
    //     }, [])
    useTitle("MysoreBonda");
    return (
        <div>
            <h3>MysoreBonda</h3>
            <img src={mysore_bonda}
                alt="" 
                style={{width: "300px"}}
            />
            <h3>40  &#8377;</h3>
        </div>

    )
}

export default MysoreBonda;
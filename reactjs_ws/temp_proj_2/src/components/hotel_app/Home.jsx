
import { useEffect } from 'react';
import idly from '../../assets/hotel/imgs/hotel.jpeg';
function Home(){
    useEffect(()=>{
        document.title = "MyZomoto";
    }, [])
    return (
        <div>
            <h3>Home</h3>
            <img src={idly}
                alt="img" 
                style={{width: "300px"}}
            />
            <h3>we are providing services since 1845</h3>
            <h3>We are providing food items with organic 
                materials and highgenic methodologies</h3>
        </div>
    )
}
export default Home;
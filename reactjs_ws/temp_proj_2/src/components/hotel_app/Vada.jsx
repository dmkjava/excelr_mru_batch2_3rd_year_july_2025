import vada from '../../assets/hotel/imgs/vada.jpeg';

function Vada(){
    return (
        <div>
            <h3>Vada</h3>
            <img src={vada} 
                alt="" 
                style={{width: "300px"}}
            />
            <h3>60 &#8377;</h3>
        </div>

    )
}

export default Vada;
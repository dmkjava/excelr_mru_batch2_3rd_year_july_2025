import dosa from '../../assets/hotel/imgs/dosa.jpeg';

function Dosa(){
    return (
        <div>
            <h3>Dosa</h3>
            <img src={dosa}
                    alt="" 
                style={{width: "300px"}}
            />
            <h3>60  &#8377;</h3>
        </div>

    )
}

export default Dosa;
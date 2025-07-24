import mysore_bonda from '../../assets/hotel/imgs/mysore_bonda.jpeg';

function MysoreBonda(){
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
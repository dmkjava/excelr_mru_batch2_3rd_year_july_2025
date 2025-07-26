import './HeaderMenu.css';
import {NavLink, useNavigate} from 'react-router-dom'
function HeaderMenu(){
    const navigate = useNavigate();
    return (
        <header>
            <nav>
                <span className="logo" onClick={()=>navigate('/')}>MyZomoto</span>
                <ul>

                    <li><NavLink to="idly">Idly</NavLink></li> 
                    <li><NavLink to="vada">Vada</NavLink></li>
                    <li><NavLink to="upma">Upma</NavLink></li>
                    <li> <NavLink to="mysore_bonda">MysoreBonda</NavLink></li>
                    <li><NavLink to="dosa">Dosa</NavLink></li>
                    <li><NavLink to="puri">Puri</NavLink></li>
                    <li><NavLink to="chapathi">Chapathi</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
export default HeaderMenu;
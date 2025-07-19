import {BrowserRouter, } from 'react-router-dom'
import HeaderMenu from './HeaderMenu';
function HotelApp(){
    return (
        <BrowserRouter>
            <HeaderMenu></HeaderMenu>
        </BrowserRouter>
        
    )
}

export default HotelApp;
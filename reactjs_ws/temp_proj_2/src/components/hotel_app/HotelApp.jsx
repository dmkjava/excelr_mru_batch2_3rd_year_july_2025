import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import HeaderMenu from './HeaderMenu';
import Idly from './Idly';
import Vada from './Vada';
import Upma from './Upma';
import MysoreBonda from './MysoreBonda';
import Dosa from './Dosa';
import Puri from './Puri';
import Chapathi from './Chapathi';
function HotelApp(){
    return (
        <BrowserRouter>
            <HeaderMenu></HeaderMenu>
            <Routes>
                {/* <Route path="" element={}></Route> */}
                <Route path="/idly" element={<Idly></Idly>}></Route>
                <Route path="/vada" element={<Vada></Vada>}></Route>
                <Route path="/upma" element={<Upma></Upma>}></Route>
                <Route path="/mysore_bonda" element={<MysoreBonda></MysoreBonda>}></Route>
                <Route path="/dosa" element={<Dosa></Dosa>}></Route>
                <Route path="/puri" element={<Puri></Puri>}></Route>
                <Route path="/chapathi" element={<Chapathi></Chapathi>}></Route>
                {/* <Route path="" element={}></Route> */}
            </Routes>
        </BrowserRouter>
        
    )
}

export default HotelApp;
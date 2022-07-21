import React from 'react'
import Home from './Tr/Home'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Cart from './Tr/Cart';

export default function Appcontainer() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>

    )
}

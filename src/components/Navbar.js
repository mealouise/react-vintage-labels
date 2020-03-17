import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Navbar.css'


export default function Navbar() {
    return (
        <nav>
            <Link to="/"><h1 className="navbar__header">Vintage Labels</h1></Link> 
            <ul>
                <li><Link to="/basket">BASKET</Link></li>
                <li><Link to="/checkout">CHECKOUT</Link></li>
            </ul>  
        </nav>
    )
}

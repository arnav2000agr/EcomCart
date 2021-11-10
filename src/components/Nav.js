import React from 'react'
import logo from '../Assets/logo.png';
function Nav() {
    return (
        <div className="navbar">
           <img className="nav logo" src={logo} alt="logo" height={80} width={80} />
           
           <div className="searchbox">
               <input className="input" placeholder="Enter your search here..." type="text"/>
           </div>

           <div className="linkstopages">
               <div className="link">
                   <a href="Order.js">Placed Orders</a>
               </div>

               <div className="link">
                   <a href="Cart.js">Cart Status</a>
               </div>
           </div>
        </div>
    )
}

export default Nav

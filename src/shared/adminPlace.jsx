import React from 'react'

import  './../assets/dash.css'
import Image from'./../assets/avatar.svg'
import {Link} from "react-router-dom"

export default function ThemeAdmin(props) {
    return (
                    
<div id="body">
  
  <div className="container">
    <nav className="navbar">
      <div className="nav_icon" onclick="toggleSidebar()">
        <i className="fa fa-bars" aria-hidden="true" />
      </div>
      <div className="navbar__right">
        <a href="#">
          <i className="fa fa-search" aria-hidden="true" />
        </a>
        <a href="#">
          <i className="fas fa-sign-out-alt" />
        </a>
        <a href="#">
          <i className="fa fa-user-circle-o" aria-hidden="true"><img width={30} src={Image} alt /></i>
        </a>
      </div>
    </nav>
    <main>
{props.children}
    </main>
    <div id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src="" alt="logo" />
          <h1>Codersbite</h1>
        </div>
        <i onclick="closeSidebar()" className="fa fa-times" id="sidebarIcon" aria-hidden="true" />
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home" />
          <a href="#">Dashboard</a>
        </div>
        <h2>MNG</h2>
        <div className="sidebar__link">
          <i className="fas fa-home" />
          <Link to="/home"> Home</Link>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-tasks" />
          <Link to="/categorie"> Manage Categories</Link>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-cubes" />
          <Link to="/product"> Manage Product</Link>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-shopping-cart" />
          <Link to="/cart"> User's Shopping Cart</Link>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-check" />
          <Link to="/order"> Confirm Order</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench" />
          <Link to="/setting">Settings</Link>
        </div>
        
      </div>
    </div>
  </div>
</div>
    )
}

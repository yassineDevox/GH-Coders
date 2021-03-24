import React, { useContext } from "react";
import "./auth/shared.css";
import AuthContext from "./auth/auth-context";
import {Link} from 'react-router-dom'

export default function AdminPage(props) {
    const {logout} = useContext(AuthContext)
    return (
                    
<div id="body">
  
  <div className="container">
    <nav className="navbar">
      <div className="nav_icon" onclick="toggleSidebar()">
        <i className="fa fa-bars" aria-hidden="true" />
      </div>
      <div className="d-flex">
      


  {/* input */}
  <div className="input-group mb-3 p-2">
                <button
                  className="btn btn-dark"
                  type="button"
                  id="button-addon1"
                  
                >
                  
                  <i className="fas fa-search"></i>
                </button>
                <input
                
                  type="text"
                  className="form-control "
                  placeholder="search"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
              </div>

           

            

     {/* name */}
     <div className=" p-2">
                <h6>Welcome firstname lastname</h6>
              </div>
            </div>
      

  {/* logout button   */}
  <div className="   ">
              <Link to="/admin">
              <button
                onClick={()=>logout()}
                  className="btn btn-outline-secondary-sm"
                  type="button"
                  id="button-addon1"
                >
                  <i class="fas fa-sign-out-alt"></i>LogOut
                </button>
              
              </Link>
              </div>



    
    {/* done */}







     

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
          <i className="fas fa-users" />
          <Link to="/order"> User information</Link>
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
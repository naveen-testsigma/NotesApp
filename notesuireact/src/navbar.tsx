import React from "react";
import Cookies from "js-cookie";
const Navbar = (props:any)=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home"> Navbar </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/home">Home</a>
                        </li>
                    {!props.isLogin && <>   <li className="nav-item">
                            <a className="nav-link" href="/signup">signup</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signin" >signin</a>
          
                      </li></>}
                      {props.isLogin && <>
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard" >dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signin"  onClick={()=>Cookies.remove('user')}>Logout</a>
          
                      </li>
                      </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
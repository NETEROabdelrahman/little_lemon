import React from 'react'
import {Link}  from 'react-router-dom'
const Header = () => {
  return (
    <div className="container">

      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
          <div className="container-fluid">
        <img src={require("../images/115168_45900_d4d2e8ab-0a96-4bc4-ae9d-f9898dc70956.jpg")} alt="little-lemon" />
    
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='about'>about</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='menu'>menu</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to='reservation'>reservation</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to='order-online'>order online</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to='login'>login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
};

export default Header
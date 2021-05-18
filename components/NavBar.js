import React from "react";
import Link from "next/link";
import {useRouter} from 'next/router'

function NavBar() {
  const router=useRouter()
  const isActive=(r) =>{
    if (router === r)
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">Tienda en linea</a>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link href="/cart">
              <a className="nav-link"><i
                className="fas fa-shopping-cart position-relative"
                aria-hidden="true"
              ></i>
              Cart</a>
            </Link>
          </li>
          <Link href="/signin">
                                <a className="nav-link" >
                                    <i className="fas fa-user" aria-hidden="true"></i> Iniciar Sesión
                                </a>
                            </Link>

         
        </ul>
      </div>
    </nav>
  );
}

export default NavBar

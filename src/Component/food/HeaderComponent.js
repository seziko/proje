import React from 'react';
import BaseComponent from "./BaseComponent";
import {Link} from "react-router-dom";
class HeaderComponent extends BaseComponent{
    render() {
        return (
            <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div><a href="http://localhost:3000" className="navbar-brand">Food App</a></div>
            <ul className="navbar-nav">
                <li><Link className="nav-link" to="/anasayfa/sehoffice">Anasayfa</Link></li>
                <li><Link className="nav-link" to="/kategoriler">Kategori</Link></li>
                <li><Link className="nav-link" to="/yemekListesi">Yemek Listesi</Link></li>
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
                <li><Link className="nav-link" to="/login">Login</Link></li>
                <li><Link className="nav-link" to="/logout">Logout</Link></li>
                <li><Link className="nav-link" to="/sepetim">Sepetim</Link></li>
            </ul>
        </nav>
            </header>
        )
    }
}
export default HeaderComponent;
import React from "react";
import "./nav.css"
import NavItem from "./navItem/NavItem";

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem icon="home" title="Inicio" path="/"/>
            <NavItem icon="users" title="Usuários" path="/users"/>
        </nav>
    </aside>
import React from "react";
import { Link } from "react-router-dom"
import logo from "../assets/logo-og.png"
import "./logo.css"

export default props =>
<aside className="logo">
    <Link to="/home">
        <img src={logo} alt="logo" />
    </Link>
</aside>
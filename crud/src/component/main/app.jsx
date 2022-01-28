import React from "react";
import { BrowserRouter } from "react-router-dom"
import Nav from "../nav"
import Logo from "../logo"
import Footer from "../footer"
import Routes from "./routes"
import "./app.css"
import crud from "../dataBase/crud";

export default props => {

    

    return (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

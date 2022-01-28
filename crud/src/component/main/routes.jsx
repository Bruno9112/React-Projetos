import React from "react";
import Home from "../pages/home"
import Cadastro from "../pages/cadastroCliente"
import Lista from "../pages/lista"
import { Route, Routes } from "react-router-dom"
import crud from "../dataBase/crud";

export default props => {

    const { user, selecionarUser, deletarUser, users, salvarCliente, novoUser } = crud()

    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/lista" element={<Lista users={users} selecionarUser={selecionarUser} deletarUser={deletarUser} novoUser={novoUser} />} />
            <Route path="/cadastro" element={<Cadastro user={user} salvarCliente={salvarCliente}/>} />
        </Routes>
    )
}






import React from "react";
import "./Header.css"

export default props => 
<header className="header">
    <h2>{props.values[2]}</h2>
    <button className="infos m-3" data-toggle="tooltip" data-placement="botton" 
    title="
    Bid -> Compra
    Ask -> Venda
    VarBid -> Variação
    PctChange -> Porcentagem de variação
    High -> Maximo
    Low -> Minimo
    ">?</button>
</header>
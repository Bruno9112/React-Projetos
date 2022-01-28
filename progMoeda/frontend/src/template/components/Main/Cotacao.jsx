import React from "react"
import "./Cotacao.css"
import Header from "../Header"
import Footer from "../Footer"
import Main from "../Main"
import Menu from "../Menu"
import Logo from "../Logo"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default class Cotacao extends React.Component {

    constructor(props) {
        super(props)
        this.state = { keys: "", values: "", valor1: "", valor2: "" }
    }

    componentWillMount() {
        this.get_infos("USD")
    }

    get_nome(nome) {
        this.get_infos(nome)
    }

    get_infos(nome) {
        const req = nome + "BRL"
        fetch(`https://economia.awesomeapi.com.br/json/last/${nome}`)
            .then(resp => resp.json())
            .then(resp => {
                const keys = Object.keys(resp[req])
                const values = Object.values(resp[req])
                this.setState({ keys: keys, values: values })
            })
    }

    set_moeda(ev) {
            const valor = parseFloat(ev)
            const cotacao = parseFloat(this.state.values[3])
            this.setState({ valor1: valor })
            this.setState({ valor2: (valor * cotacao).toFixed(2) })
    }

    render() {
        return (
            <div className="Cotacao">
                <Header values={this.state.values} />
                <Logo />
                <Main keys={this.state.keys}
                    values={this.state.values}
                    set_moeda={this.set_moeda.bind(this)}
                    valor1={this.state.valor1}
                    valor2={this.state.valor2} />
                <Menu get_nome={this.get_nome.bind(this)} />
                <Footer />
            </div>
        )
    }
}
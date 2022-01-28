import React from "react";
import "./Menu.css"

export default class Menu extends React.Component {

    setMoeda(e) {
        const self = this
        self.props.get_nome(e.target.innerHTML)
    }

    render() {
        return (
            <aside className="menu-area">
                <nav className="menu">
                    <button className="button"  onClick={e => this.setMoeda(e)}>
                        USD
                    </button>
                    <button className="button" onClick={e => this.setMoeda(e)}>
                        CAD
                    </button>
                    <button className="button" onClick={e => this.setMoeda(e)}>
                        ARS
                    </button>
                    <button className="button" onClick={e => this.setMoeda(e)}>
                        BTC
                    </button>
                    <button className="button" onClick={e => this.setMoeda(e)}>
                        LTC
                    </button>
                    <button className="button" onClick={e => this.setMoeda(e)}>
                        EUR
                    </button>
                    <button className="button" onClick={e => this.setMoeda(e)}>
                        JPY
                    </button>
                    <button className="button" onClick={e => this.setMoeda(e)}>
                        CHF
                    </button>
                    <button className="button" onClick={e => this.setMoeda(e)}>
                        AUD
                    </button>
                    <button className="button" onClick={e => this.setMoeda(e)}>
                        CNY
                    </button>
                </nav>
            </aside>
        )
    }

}




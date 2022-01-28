import React from "react";
import "./Main.css"

export default class Main extends React.Component {

    render() {
        return (
            <main className="main">
                <div className="infos">
                    <div className="col">
                        <div className="keys">
                            <div className="key"><p>{this.props.keys[0]}</p></div>
                            <div className="key"><p>{this.props.keys[1]}</p></div>
                            <div className="key"><p>{this.props.keys[3]}</p></div>
                            <div className="key"><p>{this.props.keys[4]}</p></div>
                            <div className="key"><p>{this.props.keys[5]}</p></div>
                        </div>
                        <div className="values">
                            <div className="value"><p>{this.props.values[0]}</p></div>
                            <div className="value"><p>{this.props.values[1]}</p></div>
                            <div className="value"><p>{this.props.values[3]}</p></div>
                            <div className="value"><p>{this.props.values[4]}</p></div>
                            <div className="value"><p>{this.props.values[5]}</p></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="keys">
                            <div className="key"><p>{this.props.keys[6]}</p></div>
                            <div className="key"><p>{this.props.keys[7]}</p></div>
                            <div className="key"><p>{this.props.keys[8]}</p></div>
                            <div className="key"><p>{this.props.keys[9]}</p></div>
                            <div className="key"><p>{this.props.keys[10]}</p></div>
                        </div>
                        <div className="values">
                            <div className="value"><p>{this.props.values[6]}</p></div>
                            <div className="value"><p>{this.props.values[7]}</p></div>
                            <div className="value"><p>{this.props.values[8]}</p></div>
                            <div className="value"><p>{this.props.values[9]}</p></div>
                            <div className="value"><p>{this.props.values[10]}</p></div>
                        </div>
                    </div>
                </div>
                <div className="contador">
                    <div className="valor1">
                        <label>
                            {this.props.values[0]}
                        </label>
                        <input name="valor1" type="number" value={this.props.valor1} onChange={ev => this.props.set_moeda(ev.target.value)}></input>
                    </div>
                    <div className="valor2">
                        <label>
                            {this.props.values[1]}
                        </label>
                        <input type="number" value={this.props.valor2}></input>
                    </div>
                </div>
            </main>
        )
    }
}








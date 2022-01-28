import React, { Component } from "react"
import "./Calculator.css"
import Button from "../components/Button"
import Display from "../components/Display"

const initialState = {
    displayValue: "0", //valor q sera mostrado no display (inicia com 0)
    clearDisplay: false,
    operation: null, // operação (inicia null)
    values: [0, 0], //numero para a operação
    current: 0 //indice de values
}


export default class Calculator extends Component {

    state = { ...initialState }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) { //quando essa função é chamada ele seta a operação
        if (this.state.current === 0) {  //aqui testa para ver se esta na espera do primeiro valor
            this.setState({ operation, current: 1, clearDisplay: true }) //seta para receber o segundo valor
        } else {
            const equals = operation === "=" //aqui é caso o não fora o primeiro numero, ele seta como igual para o resultado
            const currentOperation = this.state.operation

            const values = [...this.state.values] // pega os valores digitados
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`) //aplica a conta com eval
            } catch (e) {
                values[0] = this.state.values[0]
            }
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n) { //função é chamada sempre q um botão é clicado
        if (n === "." && this.state.displayValue.includes(".")) { //serve para não repetir o ponto de numero flutuante
            return
        }

        const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay
        const currentValue = clearDisplay ? "" : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if (n !== ".") {
            const i = this.state.current // recebe 0
            const newValue = parseFloat(displayValue) // valor do display
            const values = [...this.state.values] // recebe o array
            values[i] = newValue // adc o novo valor a posição 0
            this.setState({ values }) // seta o novo array a states
            console.log(values)
        }
    }

    render() {
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)
        return (
            <div className="calculator"> 
                <Display value={this.state.displayValue} />
                <Button label="AC" click={() => this.clearMemory()} triple />
                <Button label="/" click={op => this.setOperation(op)} operation />
                <Button label="7" click={n => this.addDigit(n)} />
                <Button label="8" click={n => this.addDigit(n)} />
                <Button label="9" click={n => this.addDigit(n)} />
                <Button label="*" click={op => this.setOperation(op)} operation />
                <Button label="4" click={n => this.addDigit(n)} />
                <Button label="5" click={n => this.addDigit(n)} />
                <Button label="6" click={n => this.addDigit(n)} />
                <Button label="-" click={op => this.setOperation(op)} operation />
                <Button label="1" click={n => this.addDigit(n)} />
                <Button label="2" click={n => this.addDigit(n)} />
                <Button label="3" click={n => this.addDigit(n)} />
                <Button label="+" click={op => this.setOperation(op)} operation />
                <Button label="0" click={n => this.addDigit(n)} double />
                <Button label="." click={n => this.addDigit(n)} />
                <Button label="=" click={op => this.setOperation(op)} operation />
            </div>

        )
    }
}
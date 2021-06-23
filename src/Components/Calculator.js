import React, { Component } from 'react'

export default class Calculator extends Component {
	state = {
		operator: "+",
		num1: 0,
		num2: 0,
		result: ''
	}

	setNum = (e, num) => {
		this.setState({ 
			[num]: e.target.value
		})
	}

	calculate = (num1, num2) => {

		let int1 = Number(num1)
		let int2 = Number(num2)
		let result = 0
		switch (this.state.operator){
			case '+':
				result = int1 + int2
				break

			case '-':
				result = int1 - int2
				break

			case '*':
				result = int1 * int2
				break

			case '/':
				result = int1 / int2
				break
			
			default:
				break
		}

		this.setState({
			result: result
		})
	}

	setOp = (e) => {
		this.setState({
			operator: e.target.value
		})
	}

	render(){
		return (
			<div className="container">
				<h1>Add with React!</h1>

				<div className="add">

					<input 
					type="number"
					name="num1" 
					placeholder="Enter your first number" 
					value={this.state.num1}
					onChange={ (e) => this.setNum(e, 'num1')}
					 />

					<span>{this.state.operator}</span>
					
					<input 
					type="number"
					name="num2" 
					placeholder="Enter your second number" 
					value={this.state.num2}
					onChange={ (e) => this.setNum(e, 'num2')}
					 />

					<button onClick={ () => this.calculate(this.state.num1, this.state.num2) }>=</button>
					<h3>{this.state.result}</h3>
					<button name="plus" value="+" onClick={(e)=> this.setOp(e)}>+</button>
					<button name="sub" value="-" onClick={(e)=> this.setOp(e)}>-</button>
					<button name="mult" value="*" onClick={(e)=> this.setOp(e)}>*</button>
					<button name="div" value="/" onClick={(e)=> this.setOp(e)}>/</button>
				</div>
			</div>
		)
	}
}
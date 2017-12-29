import React from 'react';

class DiceRoller extends React.Component{
	constructor(){
		super();
		this.state = {
            roll:"",
            die:""
		}
		this.handleChange = this.handleChange.bind(this);
        this.calcMod = this.calcMod.bind(this);
        this.dieRoll = this.dieRoll.bind(this);
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	calcMod(stat){
		if(stat <= 0 || stat == null || stat == ""){
			return 0;
		}
		else{
			return Math.floor((stat - 10) / 2);
		}
    }
    dieRoll(maximum){
        const minimum = 1;
        let result = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        console.log(result,'/',maximum);
        const rollLog = {
            rollResult: result,
            dieSize: maximum
        };
		const userId = firebase.auth().currentUser.uid;
		const dbRef = firebase.database().ref(`users/${userId}/roll-log`);
        dbRef.push(rollLog);
        console.log(rollLog);
    }
	render(){
		return(
			<div id="newNote" className="animated fadeIn">
                <button onClick={() => this.dieRoll(100)}>D100</button>
                <button onClick={() => this.dieRoll(20)}>D20</button>
                <button onClick={() => this.dieRoll(12)}>D12</button>
                <button onClick={() => this.dieRoll(10)}>D10</button>
                <button onClick={() => this.dieRoll(8)}>D8</button>
                <button onClick={() => this.dieRoll(6)}>D6</button>
                <button onClick={() => this.dieRoll(4)}>D4</button>
                <span ref={ref => this.roll = ref} onChange={this.handleChange} value={this.state.roll}>{this.rollRes}</span>
                <span>/</span>
                <span ref={ref => this.state.die = ref} onChange={this.handleChange} value={this.state.die}>{this.state.die}</span>
			</div>
		)
	}
}

export default DiceRoller
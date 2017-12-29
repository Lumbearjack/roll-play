import React from 'react';

class EditNote extends React.Component{
	constructor(){
		super();
		this.state = {
			editCharName: "",
			editCharLevel:"",
			editCharBackground:"",
			editCharClass: "",
			editCharRace: "",
			editCharClass:"",
			editCharAlignment:"",
			editCharExperience:"",
			editStatSTR:"",
			editStatDEX:"",
			editStatCON:"",
			editStatINT:"",
			editStatWIS:"",
			editStatCHA:"",
			editModSTR:"",
			editModDEX:"",
			editModCON:"",
			editModINT:"",
			editModWIS:"",
			editModCHA:""
		}
		this.updateNote = this.updateNote.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.scrollText = this.scrollText.bind(this);
	}
	componentDidMount(){
		const userId = firebase.auth().currentUser.uid;
		const dbRef = firebase.database().ref(`users/${userId}/notes/${this.props.params.editKey}`);
		let currentNote = "";
		dbRef.on("value", (result) => {
			currentNote = result.val();
			
			this.setState({
				everything: currentNote,
				editCharName: currentNote.name,
				editCharLevel: currentNote.level,
				editCharBackground: currentNote.background,
				editCharClass: currentNote.class,
				editCharRace: currentNote.race,
				editCharAlignment: currentNote.alignment,
				editCharStory: currentNote.story,
				editCharExperience: currentNote.experience,
				editStatSTR: currentNote.strength,
				editStatDEX: currentNote.dexterity,
				editStatCON: currentNote.constitution,
				editStatINT: currentNote.intelligence,
				editStatWIS: currentNote.wisdom,
				editStatCHA: currentNote.charisma,
				editModSTR: currentNote.modStr,
				editModDEX: currentNote.modDex,
				editModCON: currentNote.modCon,
				editModINT: currentNote.modInt,
				editModWIS: currentNote.modWis,
				editModCHA: currentNote.modCha
			}, this.scrollText)
		});
	}
	scrollText(){
			//Not sure if I'm going to revert to this feature
			// let textarea = document.getElementById('contentText');
			// textarea.scrollTop = textarea.scrollHeight;
			// this.forceUpdate();
	}
	
	updateNote(e) {
		e.preventDefault();
		const userId = firebase.auth().currentUser.uid;
		const dbRef = firebase.database().ref(`users/${userId}/notes/${this.props.params.editKey}`);
		dbRef.update({
			name: 			this.editCharName.value,
			level: 			this.editCharLevel.value,
			background: 	this.editCharBackground.value,
			class: 			this.editCharClass.value,
			race: 			this.editCharRace.value,
			alignment: 		this.editCharAlignment.value,
			story: 			this.editCharStory.value,			
			experience: 	this.editCharExperience.value,
			strength: 		this.editStatSTR.value,
			dexterity: 		this.editStatDEX.value,
			constitution: 	this.editStatCON.value,
			intelligence: 	this.editStatINT.value,
			wisdom: 		this.editStatWIS.value,
			charisma:		this.editStatCHA.value,
			modStr: 		this.calcMod(this.editStatSTR.value),
			modDex: 		this.calcMod(this.editStatDEX.value),
			modCon: 		this.calcMod(this.editStatCON.value),
			modInt: 		this.calcMod(this.editStatINT.value),
			modWis: 		this.calcMod(this.editStatWIS.value),
			modCha: 		this.calcMod(this.editStatCHA.value)
		});
		this.props.router.push('/')
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
		};
	}
	render(){
		return(
			<form id="newNote" onSubmit={this.updateNote} className="animated fadeIn">
				<div id="charInfo">
					<label htmlFor="editCharName">Character Name</label>
					<input id="charName" name="editCharName" type="text" placeholder="Character Name" ref={ref => this.editCharName = ref} onChange={this.handleChange} value={this.state.editCharName} autoCorrect="off" spellCheck="false" autoComplete="off"  autoFocus/>
					<input name="editCharLevel" type="text" placeholder="Level" ref={ref => this.editCharLevel = ref} onChange={this.handleChange} value={this.state.editCharLevel} autoComplete="off"/>
					<input name="editCharRace" type="text" placeholder="Race" ref={ref => this.editCharRace = ref} onChange={this.handleChange} value={this.state.editCharRace} autoComplete="off"/>
					<input name="editCharClass" type="text" placeholder="Class" ref={ref => this.editCharClass = ref} onChange={this.handleChange} value={this.state.editCharClass}  autoComplete="off"/>
					<input name="editCharBackground" type="text" placeholder="Background" ref={ref => this.editCharBackground = ref} onChange={this.handleChange} value={this.state.editCharBackground} autoComplete="off"/>
					<select name="editCharAlignment" placeholder="Alignment" ref={ref => this.editCharAlignment = ref} onChange={this.handleChange} value={this.state.editCharAlignment} autoComplete="off">
						<option className="selectInput" value="" disabled>Alignment</option>
						<option value="Lawful">Lawful</option>
						<option value="Neutral">Neutral</option>
						<option value="Chaotic">Chaotic</option>
					</select>
				</div>
				<div id="charStats">
					<label htmlFor="editStatStr">STR</label>
					<label htmlFor="editStatDex">DEX</label>
					<label htmlFor="editStatCon">CON</label>
					<label htmlFor="editStatInt">INT</label>
					<label htmlFor="editStatWis">WIS</label>
					<label htmlFor="editStatCha">CHA</label>
					<input id="statStr" name="editStatSTR" type="text" placeholder="0" ref={ref => this.editStatSTR = ref} onChange={this.handleChange} value={this.state.editStatSTR} autoComplete="off"/>
					<input id="statDex" name="editStatDEX" type="text" placeholder="0" ref={ref => this.editStatDEX = ref} onChange={this.handleChange} value={this.state.editStatDEX} autoComplete="off"/>
					<input id="statCon" name="editStatCON" type="text" placeholder="0" ref={ref => this.editStatCON = ref} onChange={this.handleChange} value={this.state.editStatCON} autoComplete="off"/>
					<input id="statInt" name="editStatINT" type="text" placeholder="0" ref={ref => this.editStatINT = ref} onChange={this.handleChange} value={this.state.editStatINT} autoComplete="off"/>
					<input id="statWis" name="editStatWIS" type="text" placeholder="0" ref={ref => this.editStatWIS = ref} onChange={this.handleChange} value={this.state.editStatWIS} autoComplete="off"/>
					<input id="statCha" name="editStatCHA" type="text" placeholder="0" ref={ref => this.editStatCHA = ref} onChange={this.handleChange} value={this.state.editStatCHA} autoComplete="off"/>
					<div className="statMod" id="modStr" onChange={this.handleChange} >{this.calcMod(this.state.editStatSTR)}</div>
					<div className="statMod" id="modDex" onChange={this.handleChange} >{this.calcMod(this.state.editStatDEX)}</div>
					<div className="statMod" id="modCon" onChange={this.handleChange} >{this.calcMod(this.state.editStatCON)}</div>
					<div className="statMod" id="modInt" onChange={this.handleChange} >{this.calcMod(this.state.editStatINT)}</div>
					<div className="statMod" id="modWis" onChange={this.handleChange} >{this.calcMod(this.state.editStatWIS)}</div>
					<div className="statMod" id="modCha" onChange={this.handleChange} >{this.calcMod(this.state.editStatCHA)}</div>
				</div>
				<input name="editCharExperience" ref={ref => this.editCharExperience = ref} id="editCharExperience"  placeholder="0 EXP" onChange={this.handleChange} value={this.state.editCharExperience} autoComplete="off"></input>

				<textarea name="editCharStory" ref={ref => this.editCharStory = ref} id="contentText"  placeholder="Write your story." onChange={this.handleChange} value={this.state.editCharStory}  autoComplete="off"></textarea>
				
				<input type="submit" value="Save Character"/>
			</form>
		)
	}
}

export default EditNote
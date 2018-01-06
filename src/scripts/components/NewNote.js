import React from 'react';

class NewNote extends React.Component{
	constructor(){
		super();
		this.state = {
			charName: "",
			charLevel:"",
			charBackground:"",
			charClass: "",
			charRace: "",
			charClass:"",
			charAlignment:"",
			charExperience:"",
			charStory:"",
			statSTR:0,
			statDEX:0,
			statCON:0,
			statINT:0,
			statWIS:0,
			statCHA:0,
			modSTR:0,
			modDEX:0,
			modCON:0,
			modINT:0,
			modWIS:0,
			modCHA:0,
			saveSTR:0,
			saveDEX:0,
			saveCON:0,
			saveINT:0,
			saveWIS:0,
			saveCHA:0,
			raceModSTR:0,
			raceModDEX:0,
			raceModCON:0,
			raceModINT:0,
			raceModWIS:0,
			raceModCHA:0,
			otherModSTR:0,
			otherModDEX:0,
			otherModCON:0,
			otherModINT:0,
			otherModWIS:0,
			otherModCHA:0,
			classModSTR:0,
			classModDEX:0,
			classModCON:0,
			classModINT:0,
			classModWIS:0,
			classModCHA:0,
			backgroundModSTR:0,
			backgroundModDEX:0,
			backgroundModCON:0,
			backgroundModINT:0,
			backgroundModWIS:0,
			backgroundModCHA:0,
			totalSTR:0,
			totalDEX:0,
			totalCON:0,
			totalINT:0,
			totalWIS:0,
			totalCHA:0,
			totalSaveSTR:0,
			totalSaveDEX:0,
			totalSaveCON:0,
			totalSaveINT:0,
			totalSaveWIS:0,
			totalSaveCHA:0,
			proficiency:0,
			skills:{
				Acrobatics:{
					name: "Acrobatics",
					stat:["Dexterity", "DEX"],
					num:0
				},
				AnimalHandling:{
					name: "Animal Handling",
					stat:["Wisdom", "WIS"],
					num:0
				},
				Arcana:{
					name: "Arcana",
					stat:["Intelligence", "INT"],
					num:0
				},
				Athletics:{
					name: "Athletics",
					stat:["Strength", "STR"],
					num:0
				},
				Deception:{
					name: "Deception",
					stat:["Charisma", "CHA"],
					num:0
				},
				History:{
					name: "History",
					stat:["Intelligence", "INT"],
					num:0
				},
				Insight:{
					name: "Insight",
					stat:["Wisdom", "WIS"],
					num:0
				},
				Intimidation:{
					name: "Intimidation",
					stat:["Charisma", "CHA"],
					num:0
				},
				Investigation:{
					name: "Investigation",
					stat:["Intelligence", "INT"],
					num:0
				},
				Medicine:{
					name: "Medicine",
					stat:["Wisdom", "WIS"],
					num:0
				},
				Nature:{
					name: "Nature",
					stat:["Intelligence", "INT"],
					num:0
				},
				Perception:{
					name: "Perception",
					stat:["Wisdom", "WIS"],
					num:0
				},
				Performance:{
					name: "Performance",
					stat:["Charisma", "CHA"],
					num:0
				},
				Persuasion:{
					name: "Persuasion",
					stat:["Charisma", "CHA"],
					num:0
				},
				Religion:{
					name: "Religion",
					stat:["Intelligence", "INT"],
					num:0
				},
				SleightOfHand:{
					name: "Sleight of Hand",
					stat:["Dexterity", "DEX"],
					num:0
				},
				Stealth:{
					name: "Stealth",
					stat:["Dexterity", "DEX"],
					num:0
				},
				Survival:{
					name: "Survival",
					stat:["Wisdom", "WIS"],
					num:0
				}
			}	
		}
		this.addNote = this.addNote.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.calcMod = this.calcMod.bind(this);
		this.applyRace = this.applyRace.bind(this);
		this.applyClass = this.applyClass.bind(this);
		this.statCalc = this.statCalc.bind(this);
		this.calcProf = this.calcProf.bind(this);
		this.calcPerception = this.calcPerception.bind(this);
	}
	addNote(e) {
		e.preventDefault();
		const noteItem = {
			name: this.charName.value,
			level: this.charLevel.value,
			background: this.charBackground.value,
			class: this.charClass.value,
			race: this.charRace.value,
			alignment: this.charAlignment.value,
			experience: this.charExperience.value,
			story: this.charStory.value,
			strength: this.statSTR.value,
			dexterity: this.statDEX.value,
			constitution: this.statCON.value,
			intelligence: this.statINT.value,
			wisdom: this.statWIS.value,
			charisma: this.statCHA.value,
			modStr: this.calcMod(this.statSTR.value),
			modDex: this.calcMod(this.statDEX.value),
			modCon: this.calcMod(this.statCON.value),
			modInt: this.calcMod(this.statINT.value),
			modWis: this.calcMod(this.statWIS.value),
			modCha: this.calcMod(this.statCHA.value),
			saveStr: this.saveSTR.value,
			saveDex: this.saveDEX.value,
			saveCon: this.saveCON.value,
			saveInt: this.saveINT.value,
			saveWis: this.saveWIS.value,
			saveCon: this.saveCHA.value
		};
		const userId = firebase.auth().currentUser.uid;
		const dbRef = firebase.database().ref(`users/${userId}/notes`);
		dbRef.push(noteItem);
		this.charName.value="";
		this.charLevel.value="";
		this.charBackground.value="";
		this.charClass.value="";
		this.charRace.value="";
		this.charAlignment.value="";
		this.charExperience.value="";
		this.charStory.value="";
		this.statSTR.value=0;
		this.statDEX.value=0;
		this.statCON.value=0;
		this.statINT.value=0;
		this.statWIS.value=0;
		this.statCHA.value=0;
		this.modSTR.value=0;
		this.modDEX.value=0;
		this.modCON.value=0;
		this.modINT.value=0;
		this.modWIS.value=0;
		this.modCHA.value=0;
		this.props.router.push('/');
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	applyRace(race){
		this.state.statSTR -= 0;
		this.state.statDEX -= 0;
		this.state.statCON -= 0;
		this.state.statINT -= 0;
		this.state.statWIS -= 0;
		this.state.statCHA -= 0;
		this.state.totalSTR -= 0;
		this.state.totalDEX -= 0;
		this.state.totalCON -= 0;
		this.state.totalINT -= 0;
		this.state.totalWIS -= 0;
		this.state.totalCHA -= 0;
		this.state.raceModSTR = 0;
		this.state.raceModDEX = 0;
		this.state.raceModCON = 0;
		this.state.raceModINT = 0;
		this.state.raceModWIS = 0;
		this.state.raceModCHA = 0;
		if(race == "Dragonborn"){
			this.state.raceModSTR = 2;
			this.state.raceModCHA = 1;
		}
		else if(race == "Dwarf"){
			this.state.raceModCON = 2;
		}
		else if(race == "Elf"){
			this.state.raceModDEX = 2;
		}
		else if(race == "Halfing"){
			this.state.raceModDEX = 2;
		}
		else if(race == "Human"){
			this.state.raceModSTR = 1;
			this.state.raceModDEX = 1;
			this.state.raceModCON = 1;
			this.state.raceModINT = 1;
			this.state.raceModWIS = 1;
			this.state.raceModCHA = 1;
		}
		else if(race == "Gnome"){
			this.state.raceModINT = 2;
		}
		else if(race == "Half-ELf"){
			this.state.raceModCHA = 2;
			//! add point allocation (2 pts)
		}
		else if(race == "Half-Orc"){
			this.state.raceModSTR = 2;
			this.state.raceModCON = 1;
		}
		else if(race == "Tiefling"){
			this.state.raceModCHA = 2;
			this.state.raceModINT = 1;
		}
		this.state.totalSTR += this.state.raceModSTR;
		this.state.totalDEX += this.state.raceModDEX;
		this.state.totalCON += this.state.raceModCON;
		this.state.totalINT += this.state.raceModINT;
		this.state.totalWIS += this.state.raceModWIS;
		this.state.totalCHA += this.state.raceModCHA;
	}
	applyClass(pickedClass){
		this.state.classModSTR = 0;
		this.state.classModDEX = 0;
		this.state.classModCON = 0;
		this.state.classModINT = 0;
		this.state.classModWIS = 0;
		this.state.classModCHA = 0;
		this.state.totalSaveSTR = this.state.modSTR;
		this.state.totalSaveDEX = this.state.modDEX;
		this.state.totalSaveCON = this.state.modCON;
		this.state.totalSaveINT = this.state.modINT;
		this.state.totalSaveWIS = this.state.modWIS;
		this.state.totalSaveCHA = this.state.modCHA;
		if(pickedClass == "Barbarian"){
			this.state.classModSTR = this.state.proficiency;
			this.state.classModCON = this.state.proficiency;
		}
		else if(pickedClass == "Bard"){
			this.state.classModDEX = this.state.proficiency;
			this.state.classModCHA = this.state.proficiency;
		}
		else if(pickedClass == "Cleric"){
			this.state.classModWIS = this.state.proficiency;
			this.state.classModCHA = this.state.proficiency;
		}
		else if(pickedClass == "Druid"){
			this.state.classModINT = this.state.proficiency;
			this.state.classModWIS = this.state.proficiency;
		}
		else if(pickedClass == "Fighter"){
			this.state.classModSTR = this.state.proficiency;
			this.state.classModCON = this.state.proficiency;
		}
		else if(pickedClass == "Monk"){
			this.state.classModSTR = this.state.proficiency;
			this.state.classModDEX = this.state.proficiency;
		}
		else if(pickedClass == "Paladin"){
			this.state.classModWIS = this.state.proficiency;
			this.state.classModCHA = this.state.proficiency;
		}
		else if(pickedClass == "Ranger"){
			this.state.classModSTR = this.state.proficiency;
			this.state.classModDEX = this.state.proficiency;
		}
		else if(pickedClass == "Rogue"){
			this.state.classModDEX = this.state.proficiency;
			this.state.classModINT = this.state.proficiency;
		}
		else if(pickedClass == "Sorcerer"){
			this.state.classModCON = this.state.proficiency;
			this.state.classModCHA = this.state.proficiency;
		}
		else if(pickedClass == "Warlock"){
			this.state.classModWIS = this.state.proficiency;
			this.state.classModCHA = this.state.proficiency;
		}
		else if(pickedClass == "Wizard"){
			this.state.classModINT = this.state.proficiency;
			this.state.classModWIS = this.state.proficiency;
		}
		this.state.totalSaveSTR += this.state.classModSTR;
		this.state.totalSaveDEX += this.state.classModDEX;
		this.state.totalSaveCON += this.state.classModCON;
		this.state.totalSaveINT += this.state.classModINT;
		this.state.totalSaveWIS += this.state.classModWIS;
		this.state.totalSaveCHA += this.state.classModCHA;
	}
	statCalc(base, race, other, stat){
		let total = 0;
		total = base + race + other;
		if(stat == "str"){
			this.state.totalSTR = total;
		}
		else if(stat == "dex"){
			this.state.totalDEX = total;
		}
		else if(stat == "con"){
			this.state.totalCON = total;
		}
		else if(stat == "int"){
			this.state.totalINT = total;
		}
		else if(stat == "wis"){
			this.state.totalWIS = total;
		}
		else if(stat == "cha"){
			this.state.totalCHA = total;
		}
		return total;
	}
	calcMod(stat, statType){
		let statVal = 0;
		statVal = Math.floor((stat - 10) / 2);
		if(statType == "str"){
			this.state.modSTR = statVal;
		}
		else if(statType == "dex"){
			this.state.modDEX = statVal;
		}
		else if(statType == "con"){
			this.state.modCON = statVal;
		}
		else if(statType == "int"){
			this.state.modINT = statVal;
		}
		else if(statType == "wis"){
			this.state.modWIS = statVal;
		}
		else if(statType == "cha"){
			this.state.modCHA = statVal;
		}
		return statVal;
	}
	calcSave(stat, statType){
		let statVal;
		
	}
	calcProf(){
		let level = this.state.charLevel;
		let prof = Math.ceil((level / 4)+1);
		this.state.proficiency = prof;
		return prof;
	}
	calcPerception(){
		let val = 10 + this.state.skills.Perception.num;
		
		return val;

	}
	render(){
		return(
			<form id="newNote" onSubmit={this.addNote} className="animated fadeIn">
				<div id="charInfo">
					
					<div className="cName ILGroup"><input id="charName" name="charName" className="ILInput" type="text" placeholder="Character Name" ref={ref => this.charName = ref} onChange={this.handleChange} autoCorrect="off" spellCheck="false" autoComplete="off"  autoFocus/>
					<label htmlFor="charName" className="ILLabel">Character Name</label></div>
					<div className="cLevel ILGroup">
						<input name="charLevel" className="ILInput" placeholder="Level" ref={ref => this.charLevel = ref} onChange={this.handleChange} autoComplete="off"/>
						<label htmlFor="charLevel" className="ILLabel">Lv</label>
					</div>
					<div className="cExp ILGroup">
						<input name="charExperience" className="ILInput" ref={ref => this.charExperience = ref} id="charEXP"  placeholder="0 EXP" onChange={this.handleChange} autoComplete="off"></input>
						<label htmlFor="charExperience" className="ILLabel">XP</label>
					</div>
					<div className="cRace ILGroup">
						<select name="charRace" onSelect={this.applyRace(this.state.charRace)} defaultValue="Choose Race" className="ILInput" ref={ref => this.charRace = ref} onChange={this.handleChange}>
							<option value="Choose Race" disabled>Race</option>
							<option value="Dragonborn">Dragonborn</option>
							<option value="Dwarf">Dwarf</option>
							<option value="Elf">Elf</option>
							<option value="Gnome">Gnome</option>
							<option value="Half-Elf">Half-Elf</option>
							<option value="Half-Orc">Half-Orc</option>
							<option value="Halfing">Halfing</option>
							<option value="Human">Human</option>
							<option value="Tiefling">Tiefling</option>
						</select>
						<label htmlFor="charRace" className="ILLabel">Race</label>
					</div>
					<div className="cClass ILGroup">
						<select name="charClass" onSelect={this.applyClass(this.state.charClass)} defaultValue="Class" className="ILInput" ref={ref => this.charClass = ref} onChange={this.handleChange}>
							<option value="Class" disabled>Class</option>
							<option value="Barbarian">Barbarian</option>
							<option value="Bard">Bard</option>
							<option value="Cleric">Cleric</option>
							<option value="Druid">Druid</option>
							<option value="Fighter">Fighter</option>
							<option value="Monk">Monk</option>
							<option value="Paladin">Paladin</option>
							<option value="Ranger">Ranger</option>
							<option value="Rogue">Rogue </option>
							<option value="Sorcerer">Sorcerer</option>
							<option value="Warlock">Warlock</option>
							<option value="Wizard">Wizard</option>
						</select>
						<label htmlFor="charClass" className="ILLabel">Class</label>
					</div>
					<div className="cBackg ILGroup">
						<select name="charBackground" defaultValue="Background" className="ILInput" ref={ref => this.charBackground = ref} onChange={this.handleChange}>
							<option value="Background" disabled>Background</option>
							<option value="Acolyte">Acolyte</option>
							<option value="Charlatan">Charlatan</option>
							<option value="Criminal">Criminal</option>
							<option value="Entertainer">Entertainer</option>
							<option value="Folk Hero">Folk Hero</option>
							<option value="Gladiator">Gladiator</option>
							<option value="Guild Artisan">Guild Artisan</option>
							<option value="Hermit">Hermit</option>
							<option value="Knight">Knight</option>
							<option value="Noble">Noble</option>
							<option value="Outlander">Outlander</option>
							<option value="Pirate">Pirate</option>
							<option value="Sage">Sage</option>
							<option value="Sailor">Sailor</option>
							<option value="Soldier">Soldier</option>
							<option value="Urchin">Urchin</option>
						</select>
						<label htmlFor="charBackground" className="ILLabel">Background</label>
					</div>
					<div className="cAlign ILGroup">
						<select name="charAlignment" defaultValue="Alignment" className="ILInput" placeholder="Alignment" ref={ref => this.charAlignment = ref} onChange={this.handleChange} autoComplete="off">
							<option className="selectInput" value="Alignment" disabled>Alignment</option>
							<option value="Lawful Good">Lawful Good</option>
							<option value="Lawful Neutral">Lawful Neutral</option>
							<option value="Lawful Evil">Lawful Evil</option>
							<option value="Neutral Good">Neutral Good</option>
							<option value="Neutral">Neutral</option>
							<option value="Neutral Evil">Neutral Evil</option>
							<option value="Chaotic Good">Chaotic Good</option>
							<option value="Chaotic Neutral">Chaotic Neutral</option>
							<option value="Chaotic Evil">Chaotic Evil</option>
						</select>
						<label htmlFor="charAlignment" className="ILLabel">Alignment</label>
					</div>
				</div>
				<div id="">
					<div></div>
				</div>
				<div id="charStats">
					<div className="statGroup str">
						<div className="statGroup--title">STR</div>
						<input name="statSTR" type="text" placeholder="0" ref={ref => this.statSTR = ref} onChange={this.handleChange} autoComplete="off"/>
						<div name="raceModSTR" ref={ref => this.raceModSTR = ref} onChange={this.handleChange}>
							Race: {this.state.raceModSTR}
						</div>
						<div name="otheraceModSTR" ref={ref => this.otherModSTR = ref} onChange={this.handleChange}>
							Other: {this.state.otherModSTR}
						</div>
						<div name="totalSTR" ref={ref => this.totalSTR = ref} onChange={this.handleChange}>
							Total: {this.statCalc(this.state.statSTR, this.state.raceModSTR, this.state.otherModSTR, "str")}
						</div>
						<div name="modSTR" ref={ref => this.modSTR = ref} onChange={this.handleChange}>
							Mod: {this.calcMod(this.state.totalSTR, "str")}
						</div>
					</div>

					<div className="statGroup dex">
						<div className="statGroup--title">DEX</div>
						<input name="statDEX" type="text" placeholder="0" ref={ref => this.statDEX = ref} onChange={this.handleChange} autoComplete="off"/>
						<div name="raceModDEX" ref={ref => this.raceModDEX = ref} onChange={this.handleChange}>
							Race: {this.state.raceModDEX}
						</div>
						<div name="otheraceModDEX" ref={ref => this.otherModDEX = ref} onChange={this.handleChange}>
							Other: {this.state.otherModDEX}
						</div>
						<div name="totalDEX" ref={ref => this.totalDEX = ref} onChange={this.handleChange}>
							Total: {this.statCalc(this.state.statDEX, this.state.raceModDEX, this.state.otherModDEX, "dex")}
						</div>
						<div name="modDEX" ref={ref => this.modDEX = ref} onChange={this.handleChange}>
							Mod: {this.calcMod(this.state.totalDEX, "dex")}
						</div>
					</div>

					<div className="statGroup con">
						<div className="statGroup--title">CON</div>
						<input name="statCON" type="text" placeholder="0" ref={ref => this.statCON = ref} onChange={this.handleChange} autoComplete="off"/>
						<div name="raceModCON" ref={ref => this.raceModCON = ref} onChange={this.handleChange}>
							Race: {this.state.raceModCON}
						</div>
						<div name="otheraceModCON" ref={ref => this.otherModCON = ref} onChange={this.handleChange}>
							Other: {this.state.otherModCON}
						</div>
						<div name="totalCON" ref={ref => this.totalCON = ref} onChange={this.handleChange}>
							Total: {this.statCalc(this.state.statCON, this.state.raceModCON, this.state.otherModCON, "con")}
						</div>
						<div name="modCON" ref={ref => this.modCON = ref} onChange={this.handleChange}>
							Mod: {this.calcMod(this.state.totalCON, "con")}
						</div>
					</div>

					<div className="statGroup int">
						<div className="statGroup--title">INT</div>
						<input name="statINT" type="text" placeholder="0" ref={ref => this.statINT = ref} onChange={this.handleChange} autoComplete="off"/>
						<div name="raceModINT" ref={ref => this.raceModINT = ref} onChange={this.handleChange}>
							Race: {this.state.raceModINT}
						</div>
						<div name="otheraceModINT" ref={ref => this.otherModINT = ref} onChange={this.handleChange}>
							Other: {this.state.otherModINT}
						</div>
						<div name="totalINT" ref={ref => this.totalINT = ref} onChange={this.handleChange}>
							Total: {this.statCalc(this.state.statINT, this.state.raceModINT, this.state.otherModINT, "int")}
						</div>
						<div name="modINT" ref={ref => this.modINT = ref} onChange={this.handleChange}>
							Mod: {this.calcMod(this.state.totalINT, "int")}
						</div>
					</div>

					<div className="statGroup wis">
						<div className="statGroup--title">WIS</div>
						<input name="statWIS" type="text" placeholder="0" ref={ref => this.statWIS = ref} onChange={this.handleChange} autoComplete="off"/>
						<div name="raceModWIS" ref={ref => this.raceModWIS = ref} onChange={this.handleChange}>
							Race: {this.state.raceModWIS}
						</div>
						<div name="otheraceModWIS" ref={ref => this.otherModWIS = ref} onChange={this.handleChange}>
							Other: {this.state.otherModWIS}
						</div>
						<div name="totalWIS" ref={ref => this.totalWIS = ref} onChange={this.handleChange}>
							Total: {this.statCalc(this.state.statWIS, this.state.raceModWIS, this.state.otherModWIS, "wis")}
						</div>
						<div name="modWIS" ref={ref => this.modWIS = ref} onChange={this.handleChange}>
							Mod: {this.calcMod(this.state.totalWIS, "wis")}
						</div>
					</div>

					<div className="statGroup cha">
						<div className="statGroup--title">CHA</div>
						<input name="statCHA" type="text" placeholder="0" ref={ref => this.statCHA = ref} onChange={this.handleChange} autoComplete="off"/>
						<div name="raceModCHA" ref={ref => this.raceModCHA = ref} onChange={this.handleChange}>
							Race: {this.state.raceModCHA}
						</div>
						<div name="otheraceModCHA" ref={ref => this.otherModCHA = ref} onChange={this.handleChange}>
							Other: {this.state.otherModCHA}
						</div>
						<div name="totalCHA" ref={ref => this.totalCHA = ref} onChange={this.handleChange}>
							Total: {this.statCalc(this.state.statCHA, this.state.raceModCHA, this.state.otherModCHA, "cha")}
						</div>
						<div name="modCHA" ref={ref => this.modCHA = ref} onChange={this.handleChange}>
							Mod: {this.calcMod(this.state.totalCHA, "cha")}
						</div>
					</div>
				</div>

				<div id="savingThrows">
					<ul>
						<li><label htmlFor="saveStr">STR</label>
						<div name="saveStr" onChange={this.handleChange}>{this.state.totalSaveSTR}</div></li>
						<li><label htmlFor="saveDex">DEX</label>
						<div name="saveDex" onChange={this.handleChange}>{this.state.totalSaveDEX}</div></li>
						<li><label htmlFor="saveCon">CON</label>
						<div name="saveCon" onChange={this.handleChange}>{this.state.totalSaveCON}</div></li>
						<li><label htmlFor="saveInt">INT</label>
						<div name="saveInt" onChange={this.handleChange}>{this.state.totalSaveINT}</div></li>
						<li><label htmlFor="saveWis">WIS</label>
						<div name="saveWis" onChange={this.handleChange}>{this.state.totalSaveWIS}</div></li>
						<li><label htmlFor="saveCha">CHA</label>
						<div name="saveCha" onChange={this.handleChange}>{this.state.totalSaveCHA}</div></li>
					</ul>
				</div>

				<div className="soloStat proficiency" onChange={this.handleChange}>Proficiency: {this.calcProf()}</div>

				<div className="soloStat inspiration" onChange={this.handleChange}>Inspiration: 0</div>

				<div className="soloStat passivePerception" onChange={this.handleChange}>Passive Perception: {this.calcPerception()}</div>

				<div id="skillsPanel">
					<label className="skillsPanelLabel" htmlFor="skillsTitle">Skills</label><input name="skillsTitle" type="checkbox" id="skillsTitle"/>
					<div id="charSkills">
					<div className="skillGroup">
						<div name="skillAcrobatics" className="charSkills--skill" ref={ref => this.state.skills.Acrobatics.num = ref} onChange={this.handleChange}>{this.calcMod(this.state.statDEX)}</div>
						<label htmlFor="skillAcrobatics">{this.state.skills.Acrobatics.name}&nbsp;<span className="skillType">({this.state.skills.Acrobatics.stat[1]})</span></label>
					</div>
					<div className="skillGroup">
						<div name="skillAnimalHandling" className="charSkills--skill" ref={ref => this.state.skills.AnimalHandling.num = ref} onChange={this.handleChange}>{this.calcMod(this.state.statWIS)}</div>
						<label htmlFor="skillAnimalHandling">{this.state.skills.AnimalHandling.name}&nbsp;<span className="skillType">({this.state.skills.AnimalHandling.stat[1]})</span></label>
					</div>
					<div className="skillGroup">
						<div name="skillArcana" className="charSkills--skill" ref={ref => this.state.skills.Arcana.num = ref} onChange={this.handleChange}>{this.calcMod(this.state.statINT)}</div>
						<label htmlFor="skillArcana">{this.state.skills.Arcana.name}&nbsp;<span className="skillType">({this.state.skills.Arcana.stat[1]})</span></label>
					</div>
					<div className="skillGroup">
						<div name="skillAthletics" className="charSkills--skill" ref={ref => this.state.skills.Athletics.num = ref} onChange={this.handleChange}>{this.calcMod(this.state.statSTR)}</div>
						<label htmlFor="skillAthletics">{this.state.skills.Athletics.name}&nbsp;<span className="skillType">({this.state.skills.Athletics.stat[1]})</span></label>
					</div>
					<div className="skillGroup">
						<div name="skillDeception" className="charSkills--skill" ref={ref => this.state.skills.Deception.num = ref} onChange={this.handleChange}>{this.calcMod(this.state.statCHA)}</div>
						<label htmlFor="skillDeception">{this.state.skills.Deception.name}&nbsp;<span className="skillType">({this.state.skills.Deception.stat[1]})</span></label>
					</div>
					<div className="skillGroup">
						<div name="skillHistory" className="charSkills--skill" ref={ref => this.state.skills.History.num = ref} onChange={this.handleChange}>{this.calcMod(this.state.statINT)}</div>
						<label htmlFor="skillHistory">{this.state.skills.History.name}&nbsp;<span className="skillType">({this.state.skills.History.stat[1]})</span></label>
					</div>
					<div className="skillGroup">
						<div name="skillInsight" className="charSkills--skill" ref={ref => this.state.skills.Insight.num = ref} onChange={this.handleChange}>{this.calcMod(this.state.statWIS)}</div>
						<label htmlFor="skillInsight">{this.state.skills.Insight.name}&nbsp;<span className="skillType">({this.state.skills.Insight.stat[1]})</span></label>
					</div>
					<div className="skillGroup">
						<div name="skillIntimidation" className="charSkills--skill" ref={ref => this.state.skills.Intimidation.num = ref} onChange={this.handleChange}>{this.calcMod(this.state.statCHA)}</div>
						<label htmlFor="skillIntimidation">{this.state.skills.Intimidation.name}&nbsp;<span className="skillType">({this.state.skills.Intimidation.stat[1]})</span></label>
					</div>
					<div className="skillGroup">
						<div name="skillInvestigation" className="charSkills--skill" ref={ref => this.state.skills.Investigation.num = ref} onChange={this.handleChange}>{this.calcMod(this.state.statINT)}</div>
						<label htmlFor="skillInvestigation">{this.state.skills.Investigation.name}&nbsp;<span className="skillType">({this.state.skills.Investigation.stat[1]})</span></label>
					</div>
					<div className="skillGroup">
						<div name="skillMedicine" className="charSkills--skill" ref={ref => this.state.skills.Medicine.num = ref} onChange={this.handleChange}>{this.calcMod(this.state.statWIS)}</div>
						<label htmlFor="skillMedicine">{this.state.skills.Medicine.name}&nbsp;<span className="skillType">({this.state.skills.Medicine.stat[1]})</span></label>
					</div>
					<div className="skillGroup">
						<div name="skillNature" className="charSkills--skill" ref={ref => this.state.skills.Nature.num = ref} onChange={this.handleChange}>{this.calcMod(this.state.statINT)}</div>
						<label htmlFor="skillNature">{this.state.skills.Nature.name}&nbsp;<span className="skillType">({this.state.skills.Nature.stat[1]})</span></label>
					</div>
					<div className="skillGroup">
						<div name="skillPerception" className="charSkills--skill" onChange={this.handleChange}>{this.calcMod(this.state.statWIS)}</div>
						<label htmlFor="skillPerception">{this.state.skills.Perception.name}&nbsp;<span className="skillType">({this.state.skills.Perception.stat[1]})</span></label>
					</div>
					<div className="skillGroup">
						<div name="skillPerformance" className="charSkills--skill" ref={ref => this.state.skills.Performance.num = ref} onChange={this.handleChange}>{this.calcMod(this.state.statCHA)}</div>
						<label htmlFor="skillPerformance">{this.state.skills.Performance.name}&nbsp;<span className="skillType">({this.state.skills.Performance.stat[1]})</span></label>
					</div>
					<div className="skillGroup">
						<div name="skillPersuasion" className="charSkills--skill" ref={ref => this.state.skills.Persuasion.num = ref} onChange={this.handleChange}>{this.calcMod(this.state.statCHA)}</div>
						<label htmlFor="skillPersuasion">{this.state.skills.Persuasion.name}&nbsp;<span className="skillType">({this.state.skills.Persuasion.stat[1]})</span></label>
					</div>
					<div className="skillGroup">
						<div name="skillReligion" className="charSkills--skill" ref={ref => this.state.skills.Religion.num = ref} onChange={this.handleChange}>{this.calcMod(this.state.statINT)}</div>
						<label htmlFor="skillReligion">{this.state.skills.Religion.name}&nbsp;<span className="skillType">({this.state.skills.Religion.stat[1]})</span></label>
					</div>
					<div className="skillGroup">
						<div name="skillSleightOfHand" className="charSkills--skill" ref={ref => this.state.skills.SleightOfHand.num = ref} onChange={this.handleChange}>{this.calcMod(this.state.statDEX)}</div>
						<label htmlFor="skillSleightOfHand">{this.state.skills.SleightOfHand.name}&nbsp;<span className="skillType">({this.state.skills.SleightOfHand.stat[1]})</span></label>
					</div>
					<div className="skillGroup">
						<div name="skillStealth" className="charSkills--skill" ref={ref => this.state.skills.Stealth.num = ref} onChange={this.handleChange}>{this.calcMod(this.state.statDEX)}</div>
						<label htmlFor="skillStealth">{this.state.skills.Stealth.name}&nbsp;<span className="skillType">({this.state.skills.Stealth.stat[1]})</span></label>
					</div>
					<div className="skillGroup">
						<div name="skillSurvival" className="charSkills--skill" ref={ref => this.state.skills.Survival.num = ref} onChange={this.handleChange}>{this.calcMod(this.state.statWIS)}</div>
						<label htmlFor="skillSurvival">{this.state.skills.Survival.name}&nbsp;<span className="skillType">({this.state.skills.Survival.stat[1]})</span></label>
					</div>
					</div>
				</div>		
				<textarea name="charStory" ref={ref => this.charStory = ref} id="contentText"  placeholder="Write your story." onChange={this.handleChange} autoComplete="off"></textarea>
				
				<input type="submit" value="Save Character"/>
			</form>
		)
	}
}

export default NewNote
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
			statSTR:"",
			statDEX:"",
			statCON:"",
			statINT:"",
			statWIS:"",
			statCHA:"",
			modSTR:"",
			modDEX:"",
			modCON:"",
			modINT:"",
			modWIS:"",
			modCHA:"",
			saveSTR:"",
			saveDEX:"",
			saveCON:"",
			saveINT:"",
			saveWIS:"",
			saveCHA:"",
			skills:{
				Acrobatics:{
					name: "Acrobatics",
					stat:["Dexterity", "DEX"],
					num:""
				},
				AnimalHandling:{
					name: "Animal Handling",
					stat:["Wisdom", "WIS"],
					num:""
				},
				Arcana:{
					name: "Arcana",
					stat:["Intelligence", "INT"],
					num:""
				},
				Athletics:{
					name: "Athletics",
					stat:["Strength", "STR"],
					num:""
				},
				Deception:{
					name: "Deception",
					stat:["Charisma", "CHA"],
					num:""
				},
				History:{
					name: "History",
					stat:["Intelligence", "INT"],
					num:""
				},
				Insight:{
					name: "Insight",
					stat:["Wisdom", "WIS"],
					num:""
				},
				Intimidation:{
					name: "Intimidation",
					stat:["Charisma", "CHA"],
					num:""
				},
				Investigation:{
					name: "Investigation",
					stat:["Intelligence", "INT"],
					num:""
				},
				Medicine:{
					name: "Medicine",
					stat:["Wisdom", "WIS"],
					num:""
				},
				Nature:{
					name: "Nature",
					stat:["Intelligence", "INT"],
					num:""
				},
				Perception:{
					name: "Perception",
					stat:["Wisdom", "WIS"],
					num:""
				},
				Performance:{
					name: "Performance",
					stat:["Charisma", "CHA"],
					num:""
				},
				Persuasion:{
					name: "Persuasion",
					stat:["Charisma", "CHA"],
					num:""
				},
				Religion:{
					name: "Religion",
					stat:["Intelligence", "INT"],
					num:""
				},
				SleightOfHand:{
					name: "Sleight of Hand",
					stat:["Dexterity", "DEX"],
					num:""
				},
				Stealth:{
					name: "Stealth",
					stat:["Dexterity", "DEX"],
					num:""
				},
				Survival:{
					name: "Survival",
					stat:["Wisdom", "WIS"],
					num:""
				}
			}	
		}
		this.addNote = this.addNote.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.calcMod = this.calcMod.bind(this);
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
		this.statSTR.value="";
		this.statDEX.value="";
		this.statCON.value="";
		this.statINT.value="";
		this.statWIS.value="";
		this.statCHA.value="";
		this.modSTR.value="";
		this.modDEX.value="";
		this.modCON.value="";
		this.modINT.value="";
		this.modWIS.value="";
		this.modCHA.value="";
		this.props.router.push('/');
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
	createSkillList(skills){

		
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
						<select name="charRace" defaultValue="Choose Race" className="ILInput" ref={ref => this.charRace = ref} onChange={this.handleChange}>
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
						<select name="charClass" defaultValue="Class" className="ILInput" ref={ref => this.charClass = ref} onChange={this.handleChange}>
							<option value="Class" disabled>Class</option>
							<option value="Barbarian">Barbarian</option>
							<option value="Bard">Bard</option>
							<option value="Cleric">Cleric</option>
							<option value="Druid">Druid</option>
							<option value="Fighter">Fighter</option>
							<option value="Monk">Monk</option>
							<option value="Paladin">Paladin</option>
							<option value="Ranger">Ranger</option>
							<option value="Rogue ">Rogue </option>
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
				<div id="savingThrows">
					<ul>
						<li><label htmlFor="saveStr">STR</label><input name="saveStr"  ref={ref => this.saveSTR = ref} value={this.calcMod(this.state.statSTR)} onChange={this.handleChange}></input></li>
						<li><label htmlFor="saveDex">DEX</label><input name="saveDex"  ref={ref => this.saveDEX = ref} value={this.calcMod(this.state.statDEX)} onChange={this.handleChange}></input></li>
						<li><label htmlFor="saveCon">CON</label><input name="saveCon"  ref={ref => this.saveCON = ref} value={this.calcMod(this.state.statCON)} onChange={this.handleChange}></input></li>
						<li><label htmlFor="saveInt">INT</label><input name="saveInt"  ref={ref => this.saveINT = ref} value={this.calcMod(this.state.statINT)} onChange={this.handleChange}></input></li>
						<li><label htmlFor="saveWis">WIS</label><input name="saveWis"  ref={ref => this.saveWIS = ref} value={this.calcMod(this.state.statWIS)} onChange={this.handleChange}></input></li>
						<li><label htmlFor="saveCha">CHA</label><input name="saveCha"  ref={ref => this.saveCHA = ref} value={this.calcMod(this.state.statCHA)} onChange={this.handleChange}></input></li>
					</ul>
				</div>
				<div id="charStats">
					<label htmlFor="statStr">STR</label>
					<label htmlFor="statDex">DEX</label>
					<label htmlFor="statCon">CON</label>
					<label htmlFor="statInt">INT</label>
					<label htmlFor="statWis">WIS</label>
					<label htmlFor="statCha">CHA</label>
					<input id="statStr" name="statSTR" type="text" placeholder="0" ref={ref => this.statSTR = ref} onChange={this.handleChange} autoComplete="off"/>
					<input id="statDex" name="statDEX" type="text" placeholder="0" ref={ref => this.statDEX = ref} onChange={this.handleChange} autoComplete="off"/>
					<input id="statCon" name="statCON" type="text" placeholder="0" ref={ref => this.statCON = ref} onChange={this.handleChange} autoComplete="off"/>
					<input id="statInt" name="statINT" type="text" placeholder="0" ref={ref => this.statINT = ref} onChange={this.handleChange} autoComplete="off"/>
					<input id="statWis" name="statWIS" type="text" placeholder="0" ref={ref => this.statWIS = ref} onChange={this.handleChange} autoComplete="off"/>
					<input id="statCha" name="statCHA" type="text" placeholder="0" ref={ref => this.statCHA = ref} onChange={this.handleChange} autoComplete="off"/>
					<div className="statMod" id="modStr" ref={ref => this.modSTR = ref} onChange={this.handleChange}>{this.calcMod(this.state.statSTR)}</div>
					<div className="statMod" id="modDex" ref={ref => this.modDEX = ref} onChange={this.handleChange}>{this.calcMod(this.state.statDEX)}</div>
					<div className="statMod" id="modCon" ref={ref => this.modCON = ref} onChange={this.handleChange}>{this.calcMod(this.state.statCON)}</div>
					<div className="statMod" id="modInt" ref={ref => this.modINT = ref} onChange={this.handleChange}>{this.calcMod(this.state.statINT)}</div>
					<div className="statMod" id="modWis" ref={ref => this.modWIS = ref} onChange={this.handleChange}>{this.calcMod(this.state.statWIS)}</div>
					<div className="statMod" id="modCha" ref={ref => this.modCHA = ref} onChange={this.handleChange}>{this.calcMod(this.state.statCHA)}</div>
				</div>
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
						<div name="skillPerception" className="charSkills--skill" ref={ref => this.state.skills.Perception.num = ref} onChange={this.handleChange}>{this.calcMod(this.state.statWIS)}</div>
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
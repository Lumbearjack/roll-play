import React from 'react';

class ViewChar extends React.Component{
	constructor(){
		super();
		this.state = {
			viewCharName: "",
			viewCharLevel:"",
			viewCharBackground:"",
			viewCharClass: "",
			viewCharRace: "",
			viewCharClass:"",
			viewCharAlignment:"",
			viewCharExperience:"",
			viewStatSTR:"",
			viewStatDEX:"",
			viewStatCON:"",
			viewStatINT:"",
			viewStatWIS:"",
			viewStatCHA:"",
			viewModSTR:"",
			viewModDEX:"",
			viewModCON:"",
			viewModINT:"",
			viewModWIS:"",
			viewModCHA:""
		}
		this.returnHome = this.returnHome.bind(this);
		
	}
	returnHome(e){
		e.preventDefault();
		this.props.router.push('/')
	}
	componentDidMount(){
		const userId = firebase.auth().currentUser.uid;
		const dbRef = firebase.database().ref(`users/${userId}/notes/${this.props.params.viewKey}`);
		let currentNote = "";
		dbRef.on("value", (result) => {
			currentNote = result.val();
			
			this.setState({
				everything: currentNote,
				viewCharName: currentNote.name,
				viewCharLevel: currentNote.level,
				viewCharBackground: currentNote.background,
				viewCharClass: currentNote.class,
				viewCharRace: currentNote.race,
				viewCharAlignment: currentNote.alignment,
				viewCharStory: currentNote.story,
				viewCharExperience: currentNote.experience,
				viewStatSTR: currentNote.strength,
				viewStatDEX: currentNote.dexterity,
				viewStatCON: currentNote.constitution,
				viewStatINT: currentNote.intelligence,
				viewStatWIS: currentNote.wisdom,
				viewStatCHA: currentNote.charisma,
				viewModSTR: currentNote.modStr,
				viewModDEX: currentNote.modDex,
				viewModCON: currentNote.modCon,
				viewModINT: currentNote.modInt,
				viewModWIS: currentNote.modWis,
				viewModCHA: currentNote.modCha
			}, this.scrollText)
		});
	}

	render(){
		return(
			<form id="newNote" onSubmit={this.returnHome} className="animated fadeIn">
				
				<div id="charInfo">
					<label htmlFor="viewCharName">Character Name!</label>
					<div className="charInfo viewCharName" id="charName" name="viewCharName">{this.state.viewCharName}</div>
					<div className="charInfo viewCharLevel">{this.state.viewCharLevel}</div>
					<div className="charInfo viewCharRace" >{this.state.viewCharRace }</div>
					<div className="charInfo viewCharClass">{this.state.viewCharClass}</div>
					<div className="charInfo viewCharBackground">{this.state.viewCharBackground}</div>
					<div className="charInfo viewCharAlignment">{this.state.viewCharAlignment}</div>
				</div>
				<div id="charStats">
					<label htmlFor="viewStatStr">STR</label>
					<label htmlFor="viewStatDex">DEX</label>
					<label htmlFor="viewStatCon">CON</label>
					<label htmlFor="viewStatInt">INT</label>
					<label htmlFor="viewStatWis">WIS</label>
					<label htmlFor="viewStatCha">CHA</label>
					<div className="statVal" id="statStr">{this.state.viewStatSTR}</div>
					<div className="statVal" id="statDex">{this.state.viewStatDEX}</div>
					<div className="statVal" id="statCon">{this.state.viewStatCON}</div>
					<div className="statVal" id="statInt">{this.state.viewStatINT}</div>
					<div className="statVal" id="statWis">{this.state.viewStatWIS}</div>
					<div className="statVal" id="statCha">{this.state.viewStatCHA}</div>
					<div className="statMod" id="modStr"  >{this.state.viewModSTR}</div>
					<div className="statMod" id="modDex"  >{this.state.viewModDEX}</div>
					<div className="statMod" id="modCon"  >{this.state.viewModCON}</div>
					<div className="statMod" id="modInt"  >{this.state.viewModINT}</div>
					<div className="statMod" id="modWis"  >{this.state.viewModWIS}</div>
					<div className="statMod" id="modCha"  >{this.state.viewModCHA}</div>
				</div>
				<div name="viewCharExperience" id="viewCharExperience">{this.state.viewCharExperience} exp</div>
				<div name="viewCharStory" id="contentText">{this.state.viewCharStory}</div>
				<input type="submit" value="Close"/>
			</form>
		)
	}
}

export default ViewChar
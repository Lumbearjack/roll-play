/* To-Do:

- Responsive design
- log in error codes

*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';
import Login from './components/Login';
import NoteGrid from './components/NoteGrid';
import NewNote from './components/NewNote';
import ViewChar from './components/ViewChar';
import EditNote from './components/EditNote';
import MainMenu from './components/MainMenu';
import DiceRoller from './components/DiceRoller';


// Initialize Firebase
var config = {
	apiKey: "AIzaSyC3azSZTYs_pu1DeXI5pXgw1i8DvP0eK0c",
    authDomain: "role-play-companion.firebaseapp.com",
    databaseURL: "https://role-play-companion.firebaseio.com",
    projectId: "role-play-companion",
    storageBucket: "role-play-companion.appspot.com",
    messagingSenderId: "527391321512"
};
firebase.initializeApp(config);

class App extends React.Component {
	constructor() {
		super();
		this.state = {
				notes: [],
				loggedin:false
		}
		this.handleChange = this.handleChange.bind(this);
		this.viewChar = this.viewChar.bind(this);
		this.editNote = this.editNote.bind(this);
		this.removeNote = this.removeNote.bind(this);
		this.calcMod = this.calcMod.bind(this);
	}


	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user){
				const dbRef = firebase.database().ref(`users/${user.uid}/notes`);
				dbRef.on("value", (data) => {
					const dataBaseData = data.val();
					const itemArray = [];
					for(let itemKey in dataBaseData){
						const noteKey = dataBaseData[itemKey]
						noteKey.key = itemKey;
						itemArray.push(noteKey);
					}
						this.setState({
							notes: itemArray,
							loggedin: true
					})
				});
			}
			else{
				this.setState({
					notes: [],
					loggedin: false
				})
			}
		})
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	viewChar(char){
		const userId = firebase.auth().currentUser.uid;
		const dbRef = firebase.database().ref(`users/${userId}/notes/${char.key}`)
		let viewKey = char.key;
		let charName = char.name;
		console.log(charName);
		
		this.props.router.push(`/view/${viewKey}`);
	}
	removeNote(itemToRemove) {
		const userId = firebase.auth().currentUser.uid;
		const dbRef = firebase.database().ref(`users/${userId}/notes/${itemToRemove.key}`);
		dbRef.remove();
		this.props.router.push(`/`);
	}
	editNote(note){
		const userId = firebase.auth().currentUser.uid;
		const dbRef = firebase.database().ref(`users/${userId}/notes/${note.key}`)
		let editKey = note.key;
		this.props.router.push(`/edit/${editKey}`);
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
		let content = "";
		if(this.state.loggedin){
			content = (
				this.props.children || <NoteGrid loginState={this.state.loggedin} notes={this.state.notes} viewChar={this.viewChar} removeNote={this.removeNote} editNote={this.editNote} calcMod={this.calcMod}/>
			)
		}
		return (
			<div id="wrapper" className="themeLight">
				<main id="mainBlock">
				<header>
					<Link to={"/"} className="knowtHeader"> <h1 >Roll-Play</h1> </Link>
					<Login loginState={this.state.loggedin}/>
				</header>
				<section>
					

					{content}
				</section>
				</main>
				{/*<aside id="sideBlock">
					<p>add stuff here</p>
				</aside>*/}
			</div>
		)
	}
}
ReactDOM.render(
<Router history={browserHistory}>
	<Route path="/" component={App}>
		<Route path="/newnote" component={NewNote} />
		<Route path="/view/:viewKey" component={ViewChar}/>
		<Route path="/edit/:editKey" component={EditNote}/>
		<Route path="/roll" component={DiceRoller}/>
		
	</Route>
</Router>, document.getElementById('app'));

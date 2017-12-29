import React from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

function AddNoteCard(props){
	let content = "";
	if (props.loginState){
		content = (
			<div className="noteGridItem animated fadeIn addNoteCard--Item" >
				<div className="contentWrapper addNoteCard--Container">
					<div className="addNoteCard--inner" title="Create new character">
						<i  className="fa fa-plus" aria-hidden="true"></i>
					</div>
				</div>
			</div>
		)
	}
	return(
		<div className="noteGridItem--container addNoteCard--Wrapper">
			{content}
		</div>
	)
}
function OpenRoller(props){
	let content = "";
	if (props.loginState){
		content = (
			<div className="noteGridItem animated fadeIn addNoteCard--Item" >
				<div className="contentWrapper addNoteCard--Container">
					<div className="addNoteCard--inner" title="Roll dice!">
						<img src="./assets/dtwenty.svg"/>
					</div>
				</div>
			</div>
		)
	}
	return(
		<div className="noteGridItem--container addNoteCard--Wrapper">
			{content}
		</div>
	)
}
function NoteGridItem(props){
	return(
		<div className="noteGridItem--container">
			<div className="noteGridItem animated fadeIn" >
				<div className="noteActions">
					<button className="actionViewChar" onClick={() => props.viewChar(props.data)}><i className="fa fa-eye" aria-hidden="true"></i></button>
					<button className="actionEditNote" onClick={() => props.editNote(props.data)} ><i className="fa fa-pencil" aria-hidden="true"></i></button>
					<button className="actionRemoveNote" onClick={() => props.removeNote(props.data)} ><i className="fa fa-trash" aria-hidden="true"></i></button>
				</div>
				<div className="contentWrapper">
					<h3>{props.data.name}</h3>
					<p>Level: {props.data.level} {props.data.race} {props.data.class}</p>
					<div id="charStats">
						<label htmlFor="editStatStr">STR</label>
						<label htmlFor="editStatDex">DEX</label>
						<label htmlFor="editStatCon">CON</label>
						<label htmlFor="editStatInt">INT</label>
						<label htmlFor="editStatWis">WIS</label>
						<label htmlFor="editStatCha">CHA</label>
						<div className="statBlock" id="statStr" name="editStatSTR" type="text" placeholder="0">{props.data.strength}</div>
						<div className="statBlock" id="statDex" name="editStatDEX" type="text" placeholder="0">{props.data.dexterity}</div>
						<div className="statBlock" id="statCon" name="editStatCON" type="text" placeholder="0">{props.data.constitution}</div>
						<div className="statBlock" id="statInt" name="editStatINT" type="text" placeholder="0">{props.data.intelligence}</div>
						<div className="statBlock" id="statWis" name="editStatWIS" type="text" placeholder="0">{props.data.wisdom}</div>
						<div className="statBlock" id="statCha" name="editStatCHA" type="text" placeholder="0">{props.data.charisma}</div>
						<div className="statMod" id="modStr">{props.data.modStr}</div>
						<div className="statMod" id="modDex">{props.data.modDex}</div>
						<div className="statMod" id="modCon">{props.data.modCon}</div>
						<div className="statMod" id="modInt">{props.data.modInt}</div>
						<div className="statMod" id="modWis">{props.data.modWis}</div>
						<div className="statMod" id="modCha">{props.data.modCha}</div>
					</div>
					<span className="pOverlayOFF"></span>
				</div>
			</div>
		</div>
	)
}
export default class NoteGrid extends React.Component{
	constructor(){
		super();
		this.state = {
			notes: []
		}
	}
	render(){
		return(
			<div id="noteGrid">
				<div id="toolbar">
					<Link  className="AddNoteLink" to="/newnote" > 
						<AddNoteCard loginState={this.props.loginState} key="AddNoteCardKey" />
					</Link>
					<Link  className="AddNoteLink" to="/roll" > 
						<OpenRoller loginState={this.props.loginState} key="AddNoteCardKey" />
					</Link>
				</div>
				{this.props.notes.map((note, i) => {
					return <NoteGridItem tabIndex={i} data={note}  viewChar={this.props.viewChar} removeNote={this.props.removeNote} editNote={this.props.editNote} key={note.key}/>
				})}
				<Link  className="AddNoteLink" to="/newnote" > 
					<AddNoteCard loginState={this.props.loginState} key="AddNoteCardKey" />
				</Link>
			</div>
		)
	}
}
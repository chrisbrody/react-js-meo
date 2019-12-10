import React, { Component } from  'react';
import {connect} from 'react-redux';
import {getPeople} from '../action';
import PeopleList from './PeopleList';

class App extends Component {
    
    componentDidMount(){
		this.props.getPeople()
	}
     
    
	render() {
		// console.log("----", this.props.allPeople)

		return(
			<div>
				<PeopleList people={this.props.allPeople} />
			</div>
		)
	}
}

function mapStateProps(state) {
	console.log('-------', state)
	return {
		allPeople: state.people.getPeople
	}
}

export default connect(mapStateProps, {getPeople})(App);
import React, {Component} from 'react';
//import ReactDOM from 'react-dom';

class Results extends Component{
	render(){
		var percent = (this.props.score / this.props.questions.length * 100);
		if(percent > 80){
			var message = 'Amazing my friend!';
		} else if(percent < 80 && percent >= 50){
			var message = 'You can do better!';
		} else {
			var message = 'Music is not for you!';
		}
		return(
			<div className="well">
			<h4>You Got {this.props.score} of {this.props.questions.length} Correct</h4>
			<h1>{percent}% - {message}</h1>
			<hr />
			<a href="/app">Try Again</a>
			</div>
		)
	}
}

export default Results
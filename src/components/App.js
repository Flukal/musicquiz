import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.js'
import Scorebox from './quiz/Scorebox.js'
import Results from './quiz/Results.js'

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			questions: [
				{
					id: 1,
					text: 'Who composed "Sympathy for the devil"?',
					choices: [
						{
							id: 'a',
							text: 'Motorhead'
						},
						{
							id: 'b',
							text: 'Rolling Stones'
						},
						{
							id: 'c',
							text: 'Guns n Roses'
						}
					],
					correct: 'b'
				},
				{
					id: 2,
					text: 'Which band sing in German?',
					choices: [
						{
							id: 'a',
							text: 'Scorpions'
						},
						{
							id: 'b',
							text: 'Tokio Hotel'
						},
						{
							id: 'c',
							text: 'Rammstein'
						}
					],
					correct: 'c'
				},
				{
					id: 3,
					text: 'In which Band played Dave Mustaine?',
					choices: [
						{
							id: 'a',
							text: 'Metallica'
						},
						{
							id: 'b',
							text: 'Megadeth'
						},
						{
							id: 'c',
							text: 'Sex Pistols'
						}
					],
					correct: 'a'
				},
				{
					id: 4,
					text: 'Who is the Gods of Metal?',
					choices: [
						{
							id: 'a',
							text: 'Mıchael Jackson'
						},
						{
							id: 'b',
							text: 'Lemmy'
						},
						{
							id: 'c',
							text: 'Elvis Presley'
						}
					],
					correct: 'b'
				}
			],
			score: 0,
			current: 1
		}
	}

	setCurrent(current){
		this.setState({current});
	}

	setScore(score){
		this.setState({score});
	}

	render(){
		if(this.state.current > this.state.questions.length){
			var scorebox = '';
			var results = <Results {...this.state} />
		} else {
			var scorebox = <Scorebox {...this.state} />
			var results = '';
		}
		return(
			<div>
				{scorebox}
				<QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
				{results}
			</div>
		)
	}
}

export default App
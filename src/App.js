import React, { useEffect, useState, useRef } from 'react'
import Card from './components/Card'
import Result from './components/Result'
import './scss/App.scss'
import data from './data.json'

function App() {
	const questionsCount = data.length;
	const [step, setStep] = useState(0)
	const [correctCount, setCorrectCount] = useState(0)

	const handleAnswer = (correct, selected) => {
		if (correct === selected) setCorrectCount(prev => prev + 1)
		setStep(prev => prev + 1)
	}

	const startOver = () => {
		setStep(0)
		setCorrectCount(0)
	}

	return (
		<div className='App'>
			{step !== questionsCount
				?
				<Card
					{...data[step]}
					handleAnswer={handleAnswer}
					total={questionsCount}
					step={step}
				/>
				:
				<Result
					correctCount={correctCount}
					total={questionsCount}
					startOver={startOver}
				/>
			}
		</div>
	)
}

export default App
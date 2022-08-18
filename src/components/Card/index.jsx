import React from 'react'
import styles from './Card.module.scss'
import { getPercentage } from '../../utils/math'

function Card({ question, answers, correct, handleAnswer, total, step }) {

	const shuffleAnswers = (answers) => {
		return answers.sort(() => Math.random() - 0.5)
	}

	const percentage = getPercentage(step, total)

	return (
		<div className={styles.card}>
			<div className={styles.progress}>
				<div className={styles.scale} style={{ width: `${percentage}%` }}></div>
			</div>
			<h1 className={styles.question}>{question}</h1>
			<div className={styles.answers}>
				{shuffleAnswers([...answers, correct]).map((answer, index) =>
					<div
						key={index}
						className={styles.answer}
						onClick={() => handleAnswer(correct, answer)}
					>
						{answer}
					</div>
				)}
			</div>
		</div>
	)
}

export default Card
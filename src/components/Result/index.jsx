import React, { useEffect, useState } from 'react'
import styles from './Result.module.scss'
import { getPercentage } from '../../utils/math'

function Result({ correctCount, total, startOver }) {
	const [passed, setPassed] = useState(false)

	const isPassed = () => {
		(getPercentage(correctCount, total) > 40) ? setPassed(true) : setPassed(false)
	}

	useEffect(() => {
		isPassed()
	}, [])

	return (
		<div className={styles.result}>
			{passed
				?
				<span style={{ fontSize: "100px" }}>&#127881;</span>
				:
				<span style={{ fontSize: "100px" }}>&#128563;</span>
			}
			{`${correctCount} of ${total} correctly answered`}
			<button
				className={styles.startOver}
				onClick={e => { startOver() }}
			>
				Start over
			</button>
		</div>
	)
}

export default Result
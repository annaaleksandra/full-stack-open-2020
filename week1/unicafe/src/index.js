import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const Statistic = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    if (all === 0) {
        return (
            <div>
                <p>No feedback given!!</p>
            </div>
        )
    }

    return (
        <table>
            <tbody>
                <Statistic text='good' value={good}/>
                <Statistic text='neutral' value={neutral}/>
                <Statistic text='bad' value={bad}/>
                <Statistic text='all' value={all}/>
                <Statistic text='average' value={all === 0? 0 : (good - bad) / all}/>
                <Statistic text='positive' value={`${all === 0 ? '' :(good / all *100)}%`}/>
            </tbody>
        </table>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <div>
                <h1>Give feedback</h1>
                <Button text='Good' handleClick={() => setGood(good + 1)}/>
                <Button text='Neutral' handleClick={() => setNeutral(neutral + 1)}/>
                <Button text='Bad' handleClick={() => setBad(bad + 1)}/>
            </div>
            <h1>Statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

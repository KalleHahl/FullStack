import { useState } from 'react'

const Statistics = ({good, neutral, bad, all, pos, avg}) => {
  if (all !== 0) {
    return(
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine name='good' value={good}/>
            <StatisticLine name="neutral" value={neutral}/>
            <StatisticLine name="bad" value={bad}/>
            <StatisticLine name="all" value={all}/> 
            <StatisticLine name="average" value={avg}/>
            <StatisticLine name="positive" value={pos} pros="%"/>
          </tbody>
        </table>
      </div>
  
    )
  }

  return (
    <div>
      <h1>No feedback given</h1>
    </div>
  )
  

}

const Button = (props) => {
  return (
    
    <button onClick={props.action}>
      {props.name}
    </button>
  
  )
}

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.name}</td><td>{props.value} {props.pros}</td>
    </tr>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const Good = () => setGood(good +1)
  const Neutral = () => setNeutral(neutral +1)
  const Bad = () => setBad(bad + 1)
  
  const All = () => good + bad + neutral
  const Avg = () => (good + (0-bad))/All()
  const Pos = () => good / All() * 100

  return (
    <div>

      <h1>give feedback</h1>
      <Button action={Good} name={"good"}/>
      <Button action={Neutral} name={"neutral"}/>
      <Button action={Bad} name="bad"/>
      
      <Statistics good={good} neutral={neutral} bad={bad} all={All()} avg={Avg()} pos={Pos()}/>

    </div>
  )
  
}

export default App
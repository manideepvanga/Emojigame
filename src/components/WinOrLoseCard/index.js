// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, topscore, again} = props
  const text = score === 12 ? 'Won' : 'Lose'
  const imgurl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const Playagain = () => {
    again()
  }
  return (
    <li>
      <div>
        <h1>You {text}</h1>
        <p>Best Score</p>
        <p>{score}/12</p>
        <button onClick={Playagain}>Play Again</button>
      </div>
      <div>
        <img src={imgurl} />
      </div>
    </li>
  )
}

export default WinOrLoseCard

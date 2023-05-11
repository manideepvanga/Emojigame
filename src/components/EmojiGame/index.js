/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {statelist: [], topscore: 0, isplaying: true}

  getTopscore = currentscore => {
    const {topscore} = this.state
    let newscore = topscore
    if (currentscore > topscore) {
      newscore = currentscore
    }
    this.setState({topscore: newscore, isplaying: false})
  }

  EmojiClick = ides => {
    const {emojisList} = this.props
    const {statelist, topscore, isplaying} = this.state
    const included = statelist.includes(ides)

    if (included) {
      this.getTopscore(statelist.length)
    } else {
      if (statelist.length === emojisList.length - 1) {
        this.getTopscore(emojisList.length)
      }
      this.setState(prevState => ({
        statelist: [...prevState.statelist, ides],
      }))
    }
  }

  Renderemojis = () => {
    const {emojisList} = this.props
    const newlist = this.shuffledEmojisList()
    return newlist.map(each => (
      <EmojiCard item={each} key={each.id} EmojiClick={this.EmojiClick} />
    ))
  }

  again = () => {
    this.setState({statelist: [], isplaying: true})
  }

  Renderwinorloss = () => {
    const {statelist, topscore, isplaying} = this.state

    return (
      <WinOrLoseCard
        score={statelist.length}
        topscore={topscore}
        again={this.again}
      />
    )
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {statelist, topscore, isplaying} = this.state
    const {emojisList} = this.props

    return (
      <div className="container">
        <NavBar score={statelist.length} topscore={topscore} />
        <div className="content">
          <ul>{isplaying ? this.Renderemojis() : this.Renderwinorloss()}</ul>
        </div>
      </div>
    )
  }
}
export default EmojiGame

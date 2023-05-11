// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {item, EmojiClick} = props
  const {id, emojiUrl, emojiName} = item
  const EmojiClicked = () => {
    EmojiClick(id)
  }

  return (
    <li>
      <button onClick={EmojiClicked}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard

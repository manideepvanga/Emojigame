import './index.css'

const NavBar = props => {
  const {score, topscore} = props
  return (
    <div className="navbarcontainer">
      <div className="navbarcontent">
        <div className="content1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        <div className="content2">
          <p>score:{score}</p>
          <p className="topscore">TopScore:{topscore}</p>
        </div>
      </div>
    </div>
  )
}
export default NavBar

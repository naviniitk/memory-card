import React from 'react';

const Header = (props) => {
  

  return (
    <div className="topbar">
      <div className="score">Score: {props.score}</div>
      <div className="score">Best: {props.best}</div>
    </div>
  )
}

export default Header;
import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/utils/Header';
import ImportAll from './components/utils/ImportAll';
import capitalizeFirstLetter from './components/utils/CapitalizeFirstletter';
import shuffleArray from './components/utils/ShuffleArray';

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [clickedArray, setClickedArray] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  

  const images = ImportAll(
    require.context('./components/images', false, /\.(png|jpe?g|svg)$/)
  );

  const handleClick = (alienName) => {
    playRound(alienName);
  };

  const playRound = (alienName) => {
    if (clickedArray.includes(alienName)) {
      resetGame();
    } else {
      const newScore = currentScore + 1;
      if (newScore > bestScore) setBestScore(newScore);
      setCurrentScore(newScore);
      setClickedArray((prevState) => [...prevState, alienName]);
    }
  };

  const resetGame = () => {
    setClickedArray([]);
    setCurrentScore(0);
  };

  const aliens = Object.keys(images);

  const cardItems = shuffleArray(aliens).map((key, index) => (
    <Card
      img={images[key].default}
      name={capitalizeFirstLetter(key.slice(0, -4))}
      onClick={handleClick}
      array={clickedArray}
      index={index}
    />
  ));

  return (
    <div>
      <Header score={currentScore} best={bestScore} />
      <div className="grid-items">{cardItems}</div>
    </div>
  );
};

export default App;

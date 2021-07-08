import './App.css';
import Card from './components/Card';
import ImportAll from './components/utils/ImportAll';

const App = () => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const images = ImportAll(
    require.context('./components/images', false, /\.(png|jpe?g|svg)$/)
  );

  const cardItems = Object.keys(images).map((key) => (
    <Card
      img={images[key].default}
      name={capitalizeFirstLetter(key.slice(0, -4))}
    />
  ));

  return <div className="grid-items">{cardItems}</div>;
};

export default App;

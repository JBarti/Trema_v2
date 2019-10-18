import React from 'react';
import Carousel from '../../components/common/carousel/carousel';
import './App.css';

const array = [0, 1, 2, 3, 4, 5, 6, 7];

function App() {
  return <Carousel elements={array} step={4} />;
}

export default App;

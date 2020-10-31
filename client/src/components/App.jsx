import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sampleData from '../database/sampleData.js';
import IngredientList from './IngredientList.jsx';

function App() {
  const [ingredients, setIngredients] = useState(sampleData);

  return (
    <div>
      <h1>Homeward Found</h1>
      <IngredientList ingredients={ingredients}/>

    </div>
  );
}

export default App;
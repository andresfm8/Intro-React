import { useState } from "react";

import './animal-preview.styles.css';

const AnimalPreview = () => {

  const [content, setContent] = useState(null);
  
  const handleClick = async animal => {
    const url = ''.concat(
      "https://api.the",
      animal,
      "api.com/v1/images/search"
    );
    const response = await fetch(url);
    const resJSON = await response.json();
    setContent(resJSON);
  }

  return (
    <div className="container">
      <h1>Random Dogs or Cats</h1>

      <div className="button-container">
        <button onClick={() => handleClick('dog')}>Random Dog</button>
        <button onClick={() => handleClick('cat')}>Random Cat</button>
      </div>

      {content
        ? content.map(item => (
          <img 
            className="content-img"
            key="id" 
            src={item.url}
            alt="dog"></img>
          ))
        : ''
      }
    </div>
  )
}

export default AnimalPreview;
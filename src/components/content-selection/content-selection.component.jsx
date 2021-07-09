import { useState } from "react";

import CustomButton from "../custom-button/custom-button.component";
import ContentDisplay from "../content-display/content-display.component";


import './content-selection.styles.css';


const ContentSelection = () => {

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
      <div className="button-container">
         <CustomButton className="blue-button" onClick={() => handleClick('dog')}> Random Dog </CustomButton>
         <CustomButton className="blue-button" onClick={() => handleClick('cat')}> Random Cat </CustomButton>
      </div>

      {content
        ? content.map(item => (
            <ContentDisplay key={item.id} item={item}/>
          ))
        : <h2>No dog or cat selected yet :(</h2>
      }
    </div>
  )
}

export default ContentSelection;
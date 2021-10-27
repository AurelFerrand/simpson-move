import React from "react";

function FixCharacter({ simpson }) {
  return (
    
      <figure className="container">
    <img src={simpson.image} alt={simpson.name} />
    <figcaption>
      <blockquote >{simpson.quote}</blockquote>
      <cite>{simpson.character}</cite>
    </figcaption>
  </figure>
      
    

  );
}

export default FixCharacter;

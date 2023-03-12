  import React from "react";
  
  function DogPhoto({ img }) {
    return (
      <div>
        <img src={img} alt="DogPhoto" height="100" width="100" />
      </div>
    );
  }
  

  export default DogPhoto;
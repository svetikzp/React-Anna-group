import { useState } from "react";
import Button from "./Button";
import DogPhoto from "./DogPhoto";
import './DogGallery.css'

function DogGallery() {
    const [dogPhotos, setDogPhotos] = useState([]);
    //console.log(dogPhotos);

function getDogPhoto() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data) => setDogPhotos([...dogPhotos, data]));
}

return (
  <div>
  <Button onClick={getDogPhoto} />
    {dogPhotos.length === 0 ? (
      <p>Get your first dog by clicking the button!</p>
    ) : (
      <ul>
        {dogPhotos.map((item) => {
          const nameDogs = item.message.slice(30);
          return (
            <li key={item.id}>
              <DogPhoto img={item.message} />
              {nameDogs}
            </li>
          );
        })}
      </ul>
    )}
  </div>
);
}

export default DogGallery;

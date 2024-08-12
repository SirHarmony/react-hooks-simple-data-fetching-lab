import React, { useEffect, useState } from "react";

function App() {
  const [dogImg, setDogImg] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((dog) => setDogImg(dog.message));
  });

  return dogImg ? <img src={dogImg} alt="A Random Dog" /> : <p>Loading...</p>;
}

export default App;

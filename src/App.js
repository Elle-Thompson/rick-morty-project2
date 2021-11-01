import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Header";
import Nav from "./Nav";

function App() {
  // let name = input.value

  const [currentInfo, setCurrentInfo] = useState([]);

  const apiInfo = () => {
    fetch("https://rickandmortyapi.com/api/character/?name=jerry")
      .then((res) => res.json())
      .then((data) => setCurrentInfo(data.results));
  };

  useEffect(() => {
    apiInfo();
  }, []);

  console.log(currentInfo);

  const nameInfo = currentInfo.map((names) => {
    return [
      <div className="returnData">
        <div className="returnData1">
          <h4>Name: {names.name}</h4>
          <img src={names.image} alt="" />
          <p>Species: {names.species}</p>
          <p>Gender: {names.gender}</p>
          <p>Status: {names.status}</p>
        </div>
      </div>,
    ];
  });

  return (
    <div className="App">
      <Header />
      <Nav />

      <form>
        <h3>Enter Name</h3>
        <label>
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <br />

      <button>Add to favorites</button>

      {nameInfo}
    </div>
  );
}

export default App;

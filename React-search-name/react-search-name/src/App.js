import { useState, useEffect } from "react";
import SearchBox from "./components/search-box/search-box.component";
import Container from "./components/Container/container.component";
import "./App.css";
const foods = require("./food.json");

function App() {
  const [dishArray, setUserArray] = useState(() => foods);
  const [searchString, setSearchString] = useState(() => "");
  const onChangeFunction = (e) => {
    const val = e.currentTarget.value.toLowerCase();
    setSearchString(val);
  };
  useEffect(() => {
    const filteredUsers = foods.filter((food) => {
      return (
        food.name.toLowerCase().includes(searchString) ||
        food.ingredients.toLowerCase().includes(searchString)
      );
    });

    setUserArray(filteredUsers);
  }, [searchString]);

  return (
    <div className="App">
      <SearchBox
        value={searchString}
        onChangeHandler={onChangeFunction}
        placeholder="Search Names"
      />
      <Container dishes={dishArray} />
    </div>
  );
}

export default App;

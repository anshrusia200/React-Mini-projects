import { useState } from "react";
import SearchBox from "./components/search-box/search-box.component";
import Container from "./components/Container/container.component";
import "./App.css";
const users = require("./users.json");
function App() {
  const [searchString, setSearchString] = useState("");
  const onChangeFunction = () => {
    const searchStringValue = document
      .getElementsByTagName("input")[0]
      .value.toLowerCase();
    setSearchString(searchStringValue);
    console.log(searchString);
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchString) ||
      user.email.toLowerCase().includes(searchString)
    );
  });

  return (
    <div className="App">
      <SearchBox
        placeholder="Search Names"
        onChangeHandler={() => onChangeFunction()}
      />
      <Container users={filteredUsers} />
    </div>
  );
}

export default App;

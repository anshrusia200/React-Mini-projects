import { useState, useEffect } from "react";
import SearchBox from "./components/search-box/search-box.component";
import Container from "./components/Container/container.component";
import DropdownList from "./components/dropdown-list/dropdown-list.component";
import "./App.css";

function App() {
  const [dishArray, setDishArray] = useState([]);
  const [searchString, setSearchString] = useState(() => "");
  const [filteredDishes, setFilteredDishes] = useState(dishArray);
  const [dishFiltersObj, setDishFiltersObj] = useState({
    diet: "all",
    flavor: "all",
    region: "all",
    course: "all",
  });
  useEffect(() => {
    // this callback is the effect that we want
    fetch(
      `https://dish-api.herokuapp.com/all?diet=${dishFiltersObj.diet}&flavor=${dishFiltersObj.flavor}&region=${dishFiltersObj.region}&course=${dishFiltersObj.course}`
    )
      .then((response) => response.json())
      .then((dishes) => setDishArray(dishes));
  }, [dishFiltersObj]);

  const onStringChangeFunction = (e) => {
    const val = e.currentTarget.value.toLowerCase();
    console.log(val);
    setSearchString(val);
  };

  const onFilterChangeFunction = (e) => {
    const filter_name = e.target.name;
    const filter_value = e.target.value;
    const copyFilterObj = {
      ...dishFiltersObj,
    };
    copyFilterObj[filter_name] = filter_value;
    setDishFiltersObj(() => copyFilterObj);
    console.log(dishFiltersObj);
  };

  useEffect(() => {
    const newFilteredUsers = dishArray.filter((dish) => {
      return (
        dish.name.toLowerCase().includes(searchString) ||
        dish.ingredients.toLowerCase().includes(searchString)
      );
    });

    setFilteredDishes(newFilteredUsers);
  }, [dishArray, searchString]);

  return (
    <div className="App">
      <SearchBox
        value={searchString}
        onChangeHandler={onStringChangeFunction}
        placeholder="Search Names"
      />
      <DropdownList onChangeHandler={onFilterChangeFunction} />
      <Container dishes={filteredDishes} />
    </div>
  );
}

export default App;

// import { Component } from "react";
import "./dropdown-list.styles.css";
import Dropdown from "../dropdown/dropdown.component";

const DropdownList = ({ onChangeHandler }) => {
  return (
    <div className="drop-container">
      <Dropdown
        name="diet"
        values={["vegetarian", "non vegetarian"]}
        onChangeHandler={onChangeHandler}
      />
      <Dropdown
        name="flavor"
        values={["spicy", "sweet", "bitter"]}
        onChangeHandler={onChangeHandler}
      />
      <Dropdown
        name="region"
        values={["North", "East", "South", "West", "North East"]}
        onChangeHandler={onChangeHandler}
      />
      <Dropdown
        name="course"
        values={["main course", "snack", "dessert"]}
        onChangeHandler={onChangeHandler}
      />
    </div>
  );
};

export default DropdownList;

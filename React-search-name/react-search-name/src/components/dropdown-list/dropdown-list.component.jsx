// import { Component } from "react";
import "./dropdown-list.styles.css";
import Dropdown from "../dropdown/dropdown.component";

const DropdownList = ({ onChangeHandler }) => {
  return (
    <div className="drop-container">
      <Dropdown
        name="diet"
        tag="Diet"
        values={["vegetarian", "non vegetarian"]}
        onChangeHandler={onChangeHandler}
      />
      <Dropdown
        name="flavor"
        tag="Flavour"
        values={["spicy", "sweet", "bitter"]}
        onChangeHandler={onChangeHandler}
      />
      <Dropdown
        name="region"
        tag="Region"
        values={["North", "East", "South", "West", "North East"]}
        onChangeHandler={onChangeHandler}
      />
      <Dropdown
        name="course"
        tag="Course"
        values={["main course", "snack", "dessert"]}
        onChangeHandler={onChangeHandler}
      />
    </div>
  );
};

export default DropdownList;

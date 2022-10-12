// import { Component } from "react";
import "./dropdown.styles.css";

const Dropdown = ({ name, values, onChangeHandler }) => {
  return (
    <div>
      <h2>{name}</h2>
      <select
        name={name}
        id={name}
        onChange={onChangeHandler}
        defaultValue="all"
      >
        <option value="all">All</option>
        {values.map((value) => {
          return <option value={value}>{value}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;

import "./search-box.component.css";

const SearchBox = ({ value, onChangeHandler, placeholder }) => {
  return (
    <div className="search-box">
      <input
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;

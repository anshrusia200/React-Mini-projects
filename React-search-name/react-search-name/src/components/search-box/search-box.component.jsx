import "./search-box.component.css";

const SearchBox = ({ onChangeHandler, placeholder }) => {
  return (
    <div className="search-box">
      <input
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;

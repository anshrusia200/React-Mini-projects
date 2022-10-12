import "./dish.component.css";

const Dish = ({ dish: { name, ingredients, video } }) => {
  return (
    <div className="user-details" key={name}>
      <div>{name}</div>
      <div>{ingredients}</div>
      <a href={video}>Video</a>
    </div>
  );
};

export default Dish;

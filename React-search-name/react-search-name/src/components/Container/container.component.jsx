import "./container.component.css";
import Dish from "../dish/dish.component";
const Container = ({ dishes }) => {
  return (
    <div className="container">
      {dishes.map((dish) => {
        return <Dish dish={dish} key={dish.name} />;
      })}
    </div>
  );
};

export default Container;

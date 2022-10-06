import "./container.component.css";
import User from "../User/user.component";
const Container = ({ users }) => {
  return (
    <div className="container">
      {users.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </div>
  );
};

export default Container;

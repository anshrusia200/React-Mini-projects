import "./user.component.css";

const User = ({ user: { name, email, id } }) => {
  return (
    <div className="user-details" key={id}>
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
};

export default User;

import { NavLink } from "react-router-dom";
const Button = ({ name, to }) => {
  return (
    <NavLink to={to} style={{
      padding: '0.499em 1em',
      borderRadius: '0.355em',
      backgroundColor: 'lightcoral'
    }} activeStyle={{
      color: 'white',
      backgroundColor: 'navy'
    }}>
      {name}
    </NavLink>
  );
};

export default Button;

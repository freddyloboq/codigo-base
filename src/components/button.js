import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  return <button onClick={() => {
    let userID = Math.floor(Math.random() * 1000000)

    navigate(`/detalles/${userID}`);
  }}>login</button>;
}

export default Button
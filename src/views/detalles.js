import { useParams } from "react-router-dom";

const Detalles = () => {
  let { userID } = useParams();

  return <h1>Detalles: {userID}</h1>;
};

export default Detalles;

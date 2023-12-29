import {useContext} from "react"
import { Context } from "../store/appContext"
import { useParams } from "react-router-dom";

const Detalles = () => {
  const { store, actions } = useContext(Context);
  let { userID } = useParams();

  return (
    <>
      <h1>Detalles: {userID}</h1>
      <h2>{store.name}</h2>
    </>
  );
};

export default Detalles;

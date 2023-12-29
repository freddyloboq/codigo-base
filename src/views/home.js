import { useContext } from "react"
import { Context } from "../store/appContext"
import { toast } from "react-toastify";

const Home = () => {
  const { store, actions } = useContext(Context);

  const notify = (info) =>
    toast.error(info, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <>
      <h1 onClick={() => notify()}>Home </h1>
      <h2>{store.name}</h2>
      <button onClick={() => actions.validarSiEsMayor(17)}>
        Sera mayor de edad?
      </button>
      <h4>{store.esMayor ? "si" : "no"}</h4>
    </>
  );
};

export default Home;

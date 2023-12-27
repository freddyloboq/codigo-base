import { toast } from "react-toastify";

const Home = () => {
  const notify = () =>
    toast.error("🦄 Wow so easy!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });


  return <h1 onClick={() => notify()}>Home</h1>;
};

export default Home;

import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import Loading from "./Loading";
import Toast from "./Toast";

const Notify = () => {
  const [state, dispatch] = useContext(DataContext);
  const { notify } = state;
  return (
    <>
      {notify.loading && <Loading />}
      {notify.error && (
        <Toast
          msg={{ msg: notify.error, title: "Error" }}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="bg-danger"
        />
      )}
      {notify.succes && <Toast
       msg={{ msg: notify.success, title: "Datos Correctos" }}
       handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
       bgColor="bg-success"
      
      />}
    </>
  );
};

export default Notify;
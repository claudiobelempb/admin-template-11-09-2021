import { useContext } from "react";
import AuthContext from "../context/AuthContext";

// eslint-disable-next-line react-hooks/rules-of-hooks
const useAuthDada = () => useContext(AuthContext);

export default useAuthDada;

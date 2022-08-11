import { createContext, useContext } from "react";

const Context = createContext();
const useStateValue = () => useContext(Context);

export default Context;
export { useStateValue };

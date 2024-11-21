import { createContext, useContext, useState } from "react";
import { requestRegister } from "../api/auth.js";

export const AuthContext = createContext();
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within useAuthContext");
  }
  return context;
};
export const AuthProvider = ({ children }) => {
  const [User, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const signIn = async (User) => {
    try {
      const resp = await requestRegister(User);
      console.log(resp.data);
      setUser(resp.data);
      setIsAuthenticated(true);
    } catch (err) {
      console.log(err.response);
      setErrors(err.response.data);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        signIn,
        User,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

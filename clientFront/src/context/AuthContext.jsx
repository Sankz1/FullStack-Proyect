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
  const [User, setUser] = useState(null);
  const signIn = async (User) => {
    const resp = await requestRegister(User);
    console.log(resp.data);
    setUser(resp.data);
  };
  return (
    <AuthContext.Provider
      value={{
        signIn,
        User,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

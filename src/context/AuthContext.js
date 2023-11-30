import { createContext, useContext, useState, useEffect } from "react";
import { fetchLogout, fetchMe } from "../network/requests/UsersServices";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loggedIn, setLoggedIn] = useState(false);

  const [loading, setLoading] = useState(true);

  //kullanıcıardaki mail localstoragedaki maile eşitse giriş yapmış oluyor
  useEffect(() => {
    //fetchMe gelecek
    (async () => {
      try {
        const loginData = JSON.parse(localStorage.getItem("loginData"));
        const me = await fetchMe();

        if (loginData !== null) {
          const newMe = me.find((item) => item.email === loginData.email);
          setLoggedIn(true);
          setUser(newMe);
        }
        // setUser(me);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    })();
  }, []);

  const login = (data) => {
    setLoggedIn(true);
    setUser(data);

    //accesstoken refreshtoken add

    localStorage.setItem("loginData", JSON.stringify(data));
    localStorage.setItem("loggedIn", "true");
  };

  const logout = async () => {
    setLoggedIn(false);
    setUser(null);

    //accesstoken refreshtoken remove
    localStorage.removeItem("loginData");
    localStorage.removeItem("loggedIn");
    await fetchLogout();
  };

  const values = {
    loggedIn,
    user,
    setUser,
    login,
    logout,
    loading
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };

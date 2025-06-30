import { useEffect, useState } from "react";
import axios from 'axios';

const AuthVerifier = ({ children }) => {
  const [auth, setAuth] = useState(null); // null = loading, false = fail, true = pass
  const token = localStorage.getItem('token');

  useEffect(() => {
    const verifyAuth = async () => {
      if (token) {
        try {
          const response = await axios.get(`http://localhost:3020/api/auth/verify/${token}`);
          setAuth(response.status === 200);
        } catch (error) {
          console.log(error);
          setAuth(false);
        }
      } else {
        setAuth(false);
      }
    };
    verifyAuth();
  }, [token]);

  if (auth === null) return <>Loading...</>;
  if (!auth) return window.location.pathname = '/auth'
  return children;
};

export default AuthVerifier;

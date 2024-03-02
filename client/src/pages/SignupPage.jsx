import React, { useEffect } from "react";
import Signup from "../components/Singup/Signup"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SignupPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
      window.location.reload(true)
    }
  }, []);
  return <div>
    <Signup/>
  </div>;
};

export default SignupPage;

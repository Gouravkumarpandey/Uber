import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    navigate("/captain-login");
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default CaptainLogout;

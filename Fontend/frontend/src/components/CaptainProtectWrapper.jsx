import React, { useContext, useEffect } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";

const CaptainProtectWrapper = ({ children }) => {
  const { captain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!captain) {
      navigate("/captain-login");
    }
  }, [captain, navigate]);

  return <>{children}</>;
};

export default CaptainProtectWrapper;

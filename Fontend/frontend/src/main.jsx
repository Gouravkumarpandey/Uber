import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import UserContext from "./context/UserContext";
import CaptainContext from "./context/CaptainContext";
import SocketProvider from "./context/SocketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SocketProvider>
      <UserContext>
        <CaptainContext>
          <App /> {/* Ensure App is rendered */}
        </CaptainContext>
      </UserContext>
    </SocketProvider>
  </React.StrictMode>
);

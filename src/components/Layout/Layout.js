import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          zIndex: 5
        }}
      >
        <Header />
      </div>

      <div style={{}}>{children}</div>

      <div
        style={{
          marginTop: "auto"
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

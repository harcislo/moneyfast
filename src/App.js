import React from "react";
import Layout from "./components/Layout/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";

function App() {
  return (
      <BrowserRouter>
          <Layout>
              <Routes>
                  <Route path='/' element={<HomePage/>}/>
              </Routes>
          </Layout>
      </BrowserRouter>
  );
}

export default App;

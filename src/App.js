import React from "react";
import Layout from "./components/Layout/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import QaPage from "./views/QaPage/QaPage";
import Reviews from './views/ReviewsPage/Reviews'
import Help from "./views/HelpPage/Help";
function App() {
  return (
      <BrowserRouter>
          <Layout>
              <Routes>
                  <Route path='/' element={<HomePage/>}/>
                  <Route path='/qa' element={<QaPage/>}/>
                  <Route path='/reviews' element={<Reviews/>}/>
                  <Route path='/help' element={<Help/>}/>
              </Routes>
          </Layout>
      </BrowserRouter>
  );
}

export default App;

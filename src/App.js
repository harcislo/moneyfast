import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import QaPage from "./views/QaPage/QaPage";
import Reviews from "./views/ReviewsPage/Reviews";
import Help from "./views/HelpPage/Help";
import AdminPage from "./views/AdminPage/AdminPage";
import AdminAuth from "./components/AdminAuth/AdminAuth";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./store/userSlice";
import NotAuth from "./components/NotAuth/NotAuth";
import ApplicationAdminPage from "./views/ApplicationAdminPage/ApplicationAdminPage";
import DataProcessingPage from "./views/DataProcessingPage/DataProcessingPage";

function App() {
  const token = useSelector(state => state.user.token)
  const dispatch = useDispatch()
  console.log(token)
  useEffect(() => {
    localStorage.getItem('token')
      ? dispatch(setToken(localStorage.getItem('token')))
      : dispatch(setToken(null))

  }, [token, localStorage.getItem('token')])
  return (
    <BrowserRouter>
      <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/qa" element={<QaPage />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/help" element={<Help />} />
              <Route path="/admin/auth" element={<AdminAuth />} />
              <Route path="/admin" element={token || localStorage.getItem('token') ? <AdminPage /> :  <Navigate to="/admin/auth" replace={true} />}/>
              {/*<Route path="/admin:id" element={token || localStorage.getItem('token') ? <div>Тест</div> :  <Navigate to="/admin/auth" replace={true} />}/>*/}
              <Route path="/admin/:id" element={<ApplicationAdminPage/>}/>
              <Route path="/dataProcessing" element={<DataProcessingPage/>}/>
            </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

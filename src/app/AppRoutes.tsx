import React, { Component, Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Spinner from "./components/shared/Spinner";
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const Error404 = lazy(() => import("./components/error-pages/Error404"));
const Error500 = lazy(() => import("./components/error-pages/Error500"));
const Login = lazy(() => import("./components/user-pages/Login"));
const Register = lazy(() => import("./components/user-pages/Register"));
const Lockscreen = lazy(() => import("./components/user-pages/Lockscreen"));
const CreateUser = lazy(() => import("./components/dashboard/CreateUser"));
const RegisterUser = lazy(() => import("./components/dashboard/RegisterUser"));
const TenantList = lazy(() => import("./components/dashboard/TenantList"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/registertenant" element={<RegisterUser />} />
          <Route path="/tenantlist" element={<TenantList />} />
          <Route path="/login-page" element={<Login />} />
          <Route path="/registration-page" element={<Register />} />
          <Route path="/user-pages/lockscreen" element={<Lockscreen />} />
          <Route path="/error-pages/error-404" element={<Error404 />} />
          <Route path="/error-pages/error-500" element={<Error500 />} />
          <Route path="*" element={<Navigate to="/login-page" />} />
        </Routes>
      </Suspense>
    );
  }
}

export default AppRoutes;

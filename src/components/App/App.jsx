import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Layout } from "../Layout/Layout";
import { HomePage } from "../../pages/HomePage/HomePage";
import { ContactsPage } from "../../pages/ContactsPage/ContactsPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { RegistrationPage } from "../../pages/RegistrationPage/RegistrationPage";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { ResctrictedRoute } from "../RestrictedRoute/ResctrictedRoute";
import { NotFound } from "../../pages/NotFound/NotFound";
// const Layout = lazy(() => import("../Layout/Layout"));
// const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
// const ContactsPage = lazy(() =>
//   import("../../pages/ContactsPage/ContactsPage")
// );
// const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
// const RegistrationPage = lazy(() =>
//   import("../../pages/RegistrationPage/RegistrationPage")
// );

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <ResctrictedRoute
                component={<LoginPage />}
                redirect="/contacts"
              />
            }
          />
          <Route
            path="register"
            element={
              <ResctrictedRoute
                component={<RegistrationPage />}
                redirect="/contacts"
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const UserDetails = lazy(() => import("./components/Details"));
const UserAdd = lazy(() => import("./components/Save"));
const UsersList = lazy(() => import("./components/List"));

function Users() {
  return (
    <Routes>
      <Route path="/" element={<UsersList />} />
      <Route path="/add" element={<UserAdd />} />
      <Route path="/details/:id" element={<UserDetails />} />
      <Route path="/edit/:id" element={<UserAdd />} />
      <Route
        path="*"
        element={<Navigate to="/not-found" replace />}
      />
    </Routes>
  );
}

export default Users;

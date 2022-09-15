import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const TicketSave = lazy(() => import("./components/Save"));
const TicketsList = lazy(() => import("./components/List"));

function TicketsApp() {
  return (
    <Routes>
      <Route path="/" element={<TicketsList />} />
      <Route path="/add" element={<TicketSave />} />
      <Route path="/edit/:id" element={<TicketSave />} />
      <Route
        path="*"
        element={<Navigate to="/not-found" replace />}
      />
    </Routes>
  );
}

export default TicketsApp;

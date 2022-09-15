import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import NotFound from "../404";

const Home = lazy(() => import("../../Pages/Home"));
const UsersApp = lazy(() => import("../../Pages/Users"));
const TicketsApp = lazy(() => import("../../Pages/Tickets"));

function Router() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users/*" element={<UsersApp />} />
          <Route path="tickets/*" element={<TicketsApp />} />

          <Route path="*" element={<NotFound />} />
          <Route path="not-found" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Router;

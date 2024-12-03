import { lazy } from "react";
import { Route, Routes } from "react-router";

const Platform = lazy(() => import("platform/Platform"));
const IIT = lazy(() => import("iit/IIT"));

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#689aff",
        color: "#fff",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
          padding: "24px",
          boxSizing: "border-box",
          gap: "24px",
          backgroundColor: "#ff8181",
          color: "#fff",
        }}
      >
        <div>IIT</div>
        <div>Platform</div>
      </nav>
      <Routes>
        <Route path="/platform" element={<Platform />} />
        <Route path="/iit" element={<IIT />} />
      </Routes>
    </div>
  );
}

export default App;

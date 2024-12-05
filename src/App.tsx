import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/login";
import Page from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="">
              <LoginForm />
            </div>
          }
        />

        <Route path="/dashboard" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;

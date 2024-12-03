import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "../src/components/login";
import Dashboard from "../src/components/dashboard";

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

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

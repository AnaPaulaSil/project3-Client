import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";

import { AuthContextComponent } from"./context/authContext";

function App() {
  return (
    <div className="App">
      <AuthContextComponent>

      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="sign-up" element={<SignUpPage/>}></Route>
        {/* <Route
            path="/users/:idUser"
            element={<ProtectRoute Component={UsersPage} />}
          /> */}
      </Routes>

      </AuthContextComponent>
    </div>
  );
}

export default App;

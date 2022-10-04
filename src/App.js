import "./App.css";
import { Routes, Route } from "react-router-dom";

import ChatPage from "./pages/ChatPage";
import ErrorPage from "./pages/ErrorPage";
import FeedPage from "./pages/FeedPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUpPage";
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthContextComponent } from "./context/authContext";

function App() {
  return (
    <div className="App">
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/feed" element={<FeedPage/>}></Route>
          <Route path="/profile" element={<ProfilePage/>}></Route>
          <Route path="/chat" element={<ChatPage/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
      </AuthContextComponent>
    </div>
  );
}

export default App;

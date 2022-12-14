import "./App.css";
import { Routes, Route } from "react-router-dom";

import ChatPage from "./pages/ChatPage";
import ErrorPage from "./pages/ErrorPage";
import FeedPage from "./pages/FeedPage";
import HomePage from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage/index";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUpPage";
import ProfileDetailPage from "./pages/ProfileDetailPage";

import { AuthContextComponent } from "./context/authContext";

function App() {
  return (
    <div className="App">
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/feed" element={<FeedPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/users/:id" element={<ProfileDetailPage />}></Route>
          <Route path="/chat/:idChat" element={<ChatPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </AuthContextComponent>
    </div>
  );
}

export default App;

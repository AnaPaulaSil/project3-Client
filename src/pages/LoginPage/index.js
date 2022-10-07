import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import {Toaster, toast} from "react-hot-toast"
import style from "./style.module.css"

export function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSumit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/users/login", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/feed");
    } catch (error) {
      toast.error('E-mail ou senha incorretos')
      console.log(error);
    }
  }

  return (
    <div className={style.body}>

    <form className={style.formSignUp}
    onSubmit={handleSumit}>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <label>Senha:</label>
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <button className="btn btn-light" id={style.submit} type="submit">Entrar!</button>
    </form>
    </div>
  );
}
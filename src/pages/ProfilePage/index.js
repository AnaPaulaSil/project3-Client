import { useState, useEffect } from "react";
import { api } from "../../api/api";
import Navbarr from "../../components/Navbar";
import {Link} from "react-router-dom"

function ProfilePage() {
  const [form, setForm] = useState({
    content: "",
    author: "",
    like: [],
  });

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
        await api.post("/posts/create-post")
    } catch (error) {
        console.log(error)
    }
  }

  //edit post (btn)
  //delet post (btn)

  return (
    <>
    <Navbarr/>

    <Link to="/chat">chat</Link>

    <form>
      <label>Faça um post:</label>
      <textarea
        placeholder="Digite aqui..."
        name="content"
        type="text"
        value={form.content}
        onChange={handleChange}
      />
    </form>
    </>
  );
}

export default ProfilePage;

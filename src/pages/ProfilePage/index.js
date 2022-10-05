import { useState, useEffect } from "react";
import { api } from "../../api/api";
import Navbarr from "../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import style from "../../pages/ProfilePage/style.module.css";

function ProfilePage() {
  const [form, setForm] = useState({
    content: "",
    author: "",
    like: [],
  });

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [img, setImg] = useState("");
  const [reload, setReload] = useState(true);

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUserData() {
      setIsLoading(true);
      try {
        const response = await api.get("/users/profile");
        console.log("useEffect");
        console.log(response.data);
        setUser(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUserData();
  }, [reload]);

  function handleLogOut(e) {
    e.preventDefault();
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  function handleImage(e) {
    setImg(e.target.files[0]);
  }

  useEffect(() => {
    async function updateIMG() {
      if (!img) {
    
        return;
      }
      await handleUpload();
      setReload(!reload);
    }
    updateIMG();
  }, [img]);

  async function handleUpload() {
    try {
      const uploadData = new FormData();
      console.log(uploadData);
      uploadData.append("picture", img);
      console.log(uploadData);

      const response = await api.post("/upload-image", uploadData);
      console.log(response);
      let url = response.data.url;
      const response2 = await api.put("/users/edit", {
        profilePic: url,
      });
      console.log(response2);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(user);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/posts/create-post",form);
    } catch (error) {
      console.log(error);
    }
  }



  //edit post (btn)
  //delet post (btn)

  return (
    <>
        <Navbarr />
      <div className={style.bodyprofile}>
        {!isLoading && (
          <>
            <h1>{user.username}</h1>
            <p>{user.email}</p>
            <img src={user.profilePic} alt="" width={150} />

            <p>Bio: {user.bio}</p>

            <p>Interesses em: {user.interesses}</p>
          </>
        )}

          <label>Faça um post:</label>
        <form>
          <textarea
            placeholder="Digite aqui..."
            name="content"
            type="text"
            value={form.content}
            onChange={handleChange}
          />
        </form> 
        <button type="submit" className="btn btn-light">
        Send!</button>

        <Link to="/chat">chat</Link>
        
        <div>
          <p>Alterar foto de perfil</p>
          <input type="file" onChange={handleImage} />
        </div>

        <button onClick={handleLogOut}>Logout</button>
      </div>
    </>
  );
}

export default ProfilePage;

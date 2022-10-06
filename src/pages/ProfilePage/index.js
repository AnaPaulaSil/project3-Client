import { useState, useEffect } from "react";
import { api } from "../../api/api";
import Navbarr from "../../components/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import style from "../../pages/ProfilePage/style.module.css";
import { PostsBox } from "../../components/PostsBox/index";
import EditProfilePage from "../../components/EditProfilePage";
import { Button } from "react-bootstrap";

function ProfilePage() {
  const { id } = useParams();

  const [form, setForm] = useState({
    content: "",
    author: "",
    like: [],
  });

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [img, setImg] = useState("");
  const [reload, setReload] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserData() {
      setIsLoading(true);
      try {
        console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOW");
        const response = await api.get(`/users/profile`);
        console.log(response.data);
        setUser(response.data);
        setForm(response.data);
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
      await api.post("/posts/create-post", form);
      setReload(!reload);
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
            <p>{user.cidade}</p>
            <img src={user.profilePic} alt="" width={150} />

            <p>Bio: {user.bio}</p>

            <p>Interesses em: {user.interesses}</p>

            <Button
              onClick={() => setShowForm(!showForm)}
              className="btn btn-light btn-outline-dark btn-sm me-2"
            >
              Editar Perfil
            </Button>
          </>
        )}

        {showForm === true && (
          <EditProfilePage
            form={form}
            id={id}
            setShowForm={setShowForm}
            setForm={setForm}
            reload={reload}
            setReload={setReload}
            showForm={showForm}
          />
        )}

        <label>Faça um post:</label>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Digite aqui..."
            name="content"
            type="text"
            value={form.content}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-light">
            Send!
          </button>
        </form>
        <PostsBox reload={reload} setReload={setReload} />

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

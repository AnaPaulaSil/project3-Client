import { useState, useEffect, useContext } from "react";
import { api } from "../../api/api";
import Navbarr from "../../components/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import EditProfilePage from "../../components/EditProfilePage";
import { Button } from "react-bootstrap";
import EditPostPage from "../../components/EditPostPage";

import { AuthContext } from "../../context/authContext";

import style from "./style.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProfilePage() {
  const { id } = useParams();

  const [form, setForm] = useState({
    content: "",
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
        console.log("oi");
        const response = await api.get(`/users/profile`);
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

  const { loggedInUser } = useContext(AuthContext);

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState([]);
  const [deletePost, setDeletePost] = useState([]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  console.log(form);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/posts/create-post", form);

      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(form);

  async function EditProfile() {
    try {
      const response = await api.put(`/users/edit`);

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function AllPosts() {
    try {
      const allPosts = await api.get(`posts/all-posts`);
      setPosts(allPosts.data);
    } catch (error) {
      console.log(error);
    }
  }

  //edit post (btn)
  async function EditPost() {
    try {
      const editPost = await api.put(`posts/edit-post/:idPost`);
      setEditPost(editPost.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deletedPost() {
    try {
      const deletePost = await api.delete(`deleted-post/:idPost`);
      setDeletePost(deletePost.data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(user.interesses);
  return (
    <>
      <Navbarr />
      <Container className="mt-3 mb-5">
        <Row>
          <Col md="4">
            <h1>{user.username} </h1>
            {!isLoading && (
              <>
                <img src={user.profilePic} alt="" width="80%" />
                <p>
                  <strong>Cidade: </strong>
                  {user.cidade}
                  <br />
                  <strong>Estou: </strong>
                  {user.statusRel}
                  <br />
                  <strong>Bio: </strong> {user.bio}
                  <br />
                  Interesses em:{" "}
                  {user.interesses.map((int) => {
                    return <spam>{`${int} `}</spam>;
                  })}
                </p>

                <Button
                  onClick={() => setShowForm(!showForm)}
                  className="btn btn-outline-primary text-white btn-sm me-2"
                >
                  Editar Perfil
                </Button>
              </>
            )}
          </Col>
          <Col md="8">
            {!isLoading && (
              <>
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
              </>
            )}

            <EditPostPage reload={reload} setReload={setReload} />
            <div className={style.bodyprofile}>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Fa??a um post:
                </label>
                <form onSubmit={handleSubmit}>
                  <textarea
                    placeholder="Digite aqui..."
                    name="content"
                    type="text"
                    value={form.content}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  />
                  <Button type="submit" variant="primary">
                    Send!
                  </Button>
                </form>
              </div>

              <div className="form-group">
                <p>Alterar foto de perfil</p>
                <input
                  type="file"
                  className="form-control-file"
                  onChange={handleImage}
                />
              </div>
              <Button onClick={handleLogOut} variant="danger" className="mt-4">
                Logout
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfilePage;

import { useState, useEffect, useContext } from "react";
import { api } from "../../api/api";
import Navbarr from "../../components/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";


function ProfilePage() {
  const [form, setForm] = useState({
    content: "",
    author: "",
    like: [],
  });

  const { loggedInUser } = useContext(AuthContext);

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState([]);
  const [deletePost, setDeletePost] = useState([]);
 

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/posts/create-post");
    } catch (error) {
      console.log(error);
    }
  }

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
            const allPosts = await api.get(`posts/all-posts`)
            setPosts(allPosts.data)
        } catch (error) {
            console.log(error)
        }
    }

  //edit post (btn)
    async function EditPost() {
        try {
            const editPost = await api.put(`posts/edit-post/:idPost`)
            setEditPost(editPost.data)
        } catch (error) {
            console.log(error)
        }
    }

  //delet post (btn)
    async function deletePost() {
        try {
            const deletePost = await api.delete(`deleted-post/:idPost`)
            setDeletePost(deletePost.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
      <Navbarr />
      
      {users.filter(()=>{
        if (loggedInUser._id == users._id){
            return
        }
      })
      .map((user) => {
        return (
          <>
            <img
              src={user.profilePic}
              alt="user photo"
              style={{ width: "140px" }}
            />
            <h1>{user.username}</h1>
            <p>{user.bio}</p>
            <button onChange={EditProfile}>Editar Perfil</button>
          </>
        );
      })}

      {/* <Link to="/chat">chat</Link> */}

      <form>
        <label>Faça um post:</label>
        <textarea
          placeholder="Digite aqui..."
          name="content"
          type="text"
          value={form.content}
          onChange={handleChange}
        />
        <button onChange={handleSubmit}>Postar</button>
      </form>
    </>
  );
}

export default ProfilePage;

<<<<<<< HEAD
import { useState, useEffect, useContext } from "react";
import { api } from "../../api/api";
import Navbarr from "../../components/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import style from "../../pages/ProfilePage/style.module.css";
import EditProfilePage from "../../components/EditProfilePage";
import { Button } from "react-bootstrap";
import EditPostPage from "../../components/EditPostPage";
=======
// import { useState, useEffect, useContext } from "react";
// import { api } from "../../api/api";
// import Navbarr from "../../components/Navbar";
// import { Link, useNavigate } from "react-router-dom";
// import style from "../../pages/ProfilePage/style.module.css";
>>>>>>> b6c48275b3d2dd3c436d335b0bc52fc711ac4493

// import { AuthContext } from "../../context/authContext";


<<<<<<< HEAD
function ProfilePage() {
  const { id } = useParams();

  const [form, setForm] = useState({
    content: "",
    author: "",
    like: [],
  });
=======
// function ProfilePage() {
//   const [form, setForm] = useState({
//     content: "",
//     author: "",
//     like: [],
//   });
>>>>>>> b6c48275b3d2dd3c436d335b0bc52fc711ac4493


//   const [user, setUser] = useState({});
//   const [isLoading, setIsLoading] = useState(true);

<<<<<<< HEAD
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
        setForm(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
=======
//   const [img, setImg] = useState("");
//   const [reload, setReload] = useState(true);

//   const navigate = useNavigate()

//   useEffect(() => {
//     async function fetchUserData() {
//       setIsLoading(true);
//       try {
//         const response = await api.get("/users/profile");
//         console.log("useEffect");
//         console.log(response.data);
//         setUser(response.data);

//         setIsLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     }
>>>>>>> b6c48275b3d2dd3c436d335b0bc52fc711ac4493

//     fetchUserData();
//   }, [reload]);

//   function handleLogOut(e) {
//     e.preventDefault();
//     localStorage.removeItem("loggedInUser");
//     navigate("/");
//   }

//   function handleImage(e) {
//     setImg(e.target.files[0]);
//   }

<<<<<<< HEAD
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
=======
//   useEffect(() => {
//     async function updateIMG() {
//       if (!img) {
    
//         return;
//       }
//       await handleUpload();
//       setReload(!reload);
//     }
//     updateIMG();
//   }, [img]);
>>>>>>> b6c48275b3d2dd3c436d335b0bc52fc711ac4493

//   async function handleUpload() {
//     try {
//       const uploadData = new FormData();
//       console.log(uploadData);
//       uploadData.append("picture", img);
//       console.log(uploadData);

//       const response = await api.post("/upload-image", uploadData);
//       console.log(response);
//       let url = response.data.url;
//       const response2 = await api.put("/users/edit", {
//         profilePic: url,
//       });
//       console.log(response2);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   console.log(user);

//   const { loggedInUser } = useContext(AuthContext);

// //   const [users, setUsers] = useState([]);
// //   const [posts, setPosts] = useState([]);
// //   const [editPost, setEditPost] = useState([]);
// //   const [deletePost, setDeletePost] = useState([]);
 


//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

<<<<<<< HEAD
  async function handleSubmit(e) {
    e.preventDefault();
    try {

      await api.post("/posts/create-post", form);
      setReload(!reload);
=======
//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       await api.post("/posts/create-post",form);
>>>>>>> b6c48275b3d2dd3c436d335b0bc52fc711ac4493

//     } catch (error) {
//       console.log(error);
//     }
//   }


//   async function EditProfile() {
//       try {
//           const response = await api.put(`/users/edit`);

// //           setUsers(response.data);
// //         } catch (error) {
// //             console.log(error);
// //         }
// //     }

// //     async function AllPosts() {
// //         try {
// //             const allPosts = await api.get(`posts/all-posts`)
// //             setPosts(allPosts.data)
// //         } catch (error) {
// //             console.log(error)
// //         }
// //     }

// //   //edit post (btn)
// //     async function EditPost() {
// //         try {
// //             const editPost = await api.put(`posts/edit-post/:idPost`)
// //             setEditPost(editPost.data)
// //         } catch (error) {
// //             console.log(error)
// //         }
// //     }

<<<<<<< HEAD
  //delet post (btn)
    async function deletedPost() {
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
      <div className={style.bodyprofile}>
        {!isLoading && (
          <>
            <h1>{user.username}</h1>
            <p>{user.cidade}</p>
            <p>{user.statusRel}</p>
            <img src={user.profilePic} alt="" width={150} />
=======
//   //delet post (btn)
//     async function deletePost() {
//         try {
//             const deletePost = await api.delete(`deleted-post/:idPost`)
//             setDeletePost(deletePost.data)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//   return (
//     <>
//         <Navbarr />
//       <div className={style.bodyprofile}>
//         {!isLoading && (
//           <>
//             <h1>{user.username}</h1>
//             <p>{user.email}</p>
//             <img src={user.profilePic} alt="" width={150} />
>>>>>>> b6c48275b3d2dd3c436d335b0bc52fc711ac4493

//             <p>Bio: {user.bio}</p>

<<<<<<< HEAD
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


        <Link to="/chat">chat</Link>

        <div>
          <p>Alterar foto de perfil</p>
          <input type="file" onChange={handleImage} />
        </div>
        <EditPostPage reload={reload} setReload={setReload} />
=======
//             <p>Interesses em: {user.interesses}</p>
//           </>
//         )}

//           <label>Faça um post:</label>
//         <form>
//           <textarea
//             placeholder="Digite aqui..."
//             name="content"
//             type="text"
//             value={form.content}
//             onChange={handleChange}
//           />
//         </form> 
//         <button type="submit" className="btn btn-light">
//         Send!</button>

//         <Link to="/chat">chat</Link>
        
//         <div>
//           <p>Alterar foto de perfil</p>
//           <input type="file" onChange={handleImage} />
//         </div>
>>>>>>> b6c48275b3d2dd3c436d335b0bc52fc711ac4493

//         <button onClick={handleLogOut}>Logout</button>
//       </div>

//     </>
//   );
// }

// export default ProfilePage;

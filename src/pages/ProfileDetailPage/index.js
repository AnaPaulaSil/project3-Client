import { Link, useParams, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import Navbarr from "../../components/Navbar";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { BsFillChatRightDotsFill } from "react-icons/bs";

function ProfileDetailPage() {
  const [chat, setChat] = useState([]);
  const [users, setUsers] = useState({});
  //isloading
  const { id } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([])

  async function InitChat() {
    try {
      const response = await api.post(`/chat/create-chat/:idUser`);
      setChat(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function profileUser() {
      try {
        const response = await api.get(`/users/user/${id}`);
        // console.log(response);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    profileUser();
  }, []);

  async function handleChat(e) {
    try {
      const response = await api.post(`/chat/create-chat/${id}`);
      if (response.data.oldChat) {
        // console.log(response, "chat ja criado");
        navigate(`/chat/${response.data.oldChat}`);
        return;
      }
      // console.log(response, "chat novo");

      navigate(`/chat/${response.data._id}`); //id do chat criado
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbarr />
      <Card> 
        <img
          style={{ width: "350px", display: "flex", margin: "5%" }}
          src={users.profilePic}
        />
        <div style= {{display: "flex"}}>
          <h1
            style={{
              color: "black",
              fontSize: "40px",
              display: "flex",
              margin: "2%",
            }}
          >
            {users.username}, {users.age}
          </h1>
          <p>{users.bio}</p>
          <button
            style={{
              color: "white",
              fontSize: "30px",
              background: "rgb(35,213,228)",
              background:
                "linear-gradient(45deg, rgba(35,213,228,1) 0%, rgba(240,11,254,1) 100%",
              width: "70px",
              borderRadius: "40px",
            }}
            onClick={handleChat}
          >
            <BsFillChatRightDotsFill />
          </button>
        </div>
        <h6>
          {users.statusRel}, {users.orientacaoSexual}
        </h6>
        <p>Interesses:</p>
        <p
          style={{
            fontSize: "15px",
            // backgroundColor: "lightgreen",
            borderRadius: "8px",
            padding: "4px",
            background: "rgb(35,213,228)",
            background:
              "linear-gradient(45deg, rgba(35,213,228,1) 0%, rgba(240,11,254,1) 100%",
            width: "80px",
            margin: "1%",
          }}
        >
          {users.interesses}
        </p>
      </Card>
      {posts.map((post) => {
        return (
          <Card>
            <p>{post.username}</p>
            <p>{post.posts}</p>
          </Card>
        )
      })}
    </>
  );
}

export default ProfileDetailPage;

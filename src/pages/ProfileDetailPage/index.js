import { Link, useParams, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import Navbarr from "../../components/Navbar";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

function ProfileDetailPage() {
  const [chat, setChat] = useState([]);
  const [users, setUsers] = useState({});
  //isloading
  const { id } = useParams();
  const navigate = useNavigate();

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
        <img src={users.profilePic}/>
      <h1>{users.username}</h1>
      <h4>{users.age}</h4>
      <p>{users.bio}</p>
      <button onClick={handleChat}>Chat</button>
      <h6>{users.orientacaoSexual}</h6>
      <h6>{users.statusRel}</h6>
      <p>{users.interesses}</p>
      </Card>
    </>
  );
}

export default ProfileDetailPage;

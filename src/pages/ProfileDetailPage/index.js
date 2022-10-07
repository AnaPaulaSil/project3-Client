import { Link, useParams, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import Navbarr from "../../components/Navbar";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import styles from "./style.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProfileDetailPage() {
  const [chat, setChat] = useState([]);
  const [users, setUsers] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const [buttonToggle, setButtonToggle] = useState(true);
  function handleToggle() {
    setButtonToggle(!buttonToggle);
  }
  const [likeToggle, setLikeToggle] = useState(true);
  function handleLike() {
    setLikeToggle(!likeToggle);
  }

  useEffect(() => {
    async function allPosts() {
      setIsLoading(true);
      try {
        const response = await api.get(`/posts/all-posts`);
        setPosts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    allPosts();
  }, []);
  console.log(posts);

  return (
    <>
      <Navbarr />

      <Card>
        <img
          alt="profile photo"
          className={styles.profilePic}
          // style={{ width: "350px", display: "flex", margin: "5%" }}
          src={users.profilePic}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
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

        <p>{users.bio}</p>
        <hr className={styles.hrLine}></hr>
        {buttonToggle ? (
          <button className={styles.followBtn} onClick={handleToggle}>
            seguir
          </button>
        ) : (
          <button className={styles.followBtn} onClick={handleToggle}>
            deixar de seguir
          </button>
        )}

        <h6 style={{ marginTop: "3%" }}>
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
            alignSelf: "center",
          }}
        >
          {users.interesses}
        </p>
      </Card>
      {!isLoading &&
        posts.map((post) => {
          return (
            <>
              <Card>
                <p>{post.author.username}</p>
                <p>{post.content}</p>
                {likeToggle ? (
                  <button onClick={handleLike}>
                    <BsHeart />
                  </button>
                ) : (
                  <button onClick={handleLike}>
                    <BsHeartFill />
                  </button>
                )}
              </Card>
            </>
          );
        })}
    </>
  );
}

export default ProfileDetailPage;

import { useEffect, useState, useContext } from "react";
import { Card } from "react-bootstrap";
import { api } from "../../api/api";
import Navbarr from "../../components/Navbar/index";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
// import wallpaper from "../../assets/images/bg-01.jpg";

function FeedPage() {
  const [users, setUsers] = useState([]);
  const { loggedInUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const wallpaper = require("../../assets/images/bg-01.jpg");
  useEffect(() => {
    setLoading(true);
    async function cardsUsers() {
      try {
        const response = await api.get(`/users/all`);
        // console.log(response);
        setUsers(response.data);
        setLoading(false);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    cardsUsers();
  }, []);

  // async function visitProfile() {
  //   try {
  //     const response = await api.get(`/users/user/:id`)

  //     setUsers(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // console.log("logged", loggedInUser._id);
  // console.log("user", users._id);

  // console.log(users);
  return (
    <>
      <Navbarr />
      <h1>feed</h1>
      <div>
        {!loading &&
          users
            .filter((user) => {
              return loggedInUser.user._id !== user._id;
            })
            .map((user) => {
              return (
                <>
                  <Card
                    style={{
                      width: "18rem",
                      margin: "5%",
                      boxShadow: "0 8px 6px -6px black",
                      // backgroundImage: "wallpaper",
                      // backgroundColor: "pink"
                      background: "rgb(35,213,228)",
                      background:
                        "linear-gradient(45deg, rgba(35,213,228,1) 0%, rgba(240,11,254,1) 100%",
                    }}
                  >
                    <Link to={`/users/${user._id}`}>
                      <Card.Img
                        variant="top"
                        src={user.profilePic}
                        alt="user photo"
                        style={{ width: "100px180" }}
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title style={{ fontSize: "38px" }}>
                        {user.username}
                      </Card.Title>
                      <div style={{ display: "flex" }}>
                        <Card.Text
                          style={{
                            fontSize: "20px",
                            // backgroundColor: "lightgreen",
                            borderRadius: "8px",
                            padding: "4px",
                          }}
                        >
                          {user.orientacaoSexual}
                        </Card.Text>
                        <Card.Text style={{ fontSize: "20px", width: "900px" }}>
                          {user.age} anos
                        </Card.Text>
                      </div>
                      <Card.Title
                        style={{
                          display: "flex",
                          fontSize: "16px",
                          textDecoration: "underline",
                          margin: "1%",
                        }}
                      >
                        {user.cidade}
                      </Card.Title>
                      {/* <hr/> */}
                    </Card.Body>
                    {/* <h3>{user.username}</h3>
                  <p>{user.age}</p>
                  <h6>{user.cidade}</h6> */}
                  </Card>
                </>
              );
            })}
      </div>
    </>
  );
}

export default FeedPage;

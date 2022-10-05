import { useEffect, useState, useContext } from "react";
import { Card } from "react-bootstrap";
import { api } from "../../api/api";
import Navbarr from "../../components/Navbar/index";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

function FeedPage() {
  const [users, setUsers] = useState([]);
  const { loggedInUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

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

  console.log(users);
  return (
    <>
      <Navbarr />
      <h1>feed</h1>

      {!loading &&
        users
          .filter((user) => {
            return loggedInUser.user._id !== user._id;
          })
          .map((user) => {
            return (
              <>
                <Card>
                  <Link to={`/users/${user._id}`}>
                    <img
                      // onClick={visitProfile}
                      src={user.profilePic}
                      alt="user photo"
                      style={{ width: "140px" }}
                    />
                  </Link>

                  <h3>{user.username}</h3>
                  <p>{user.age}</p>
                  <h6>{user.cidade}</h6>
                </Card>
              </>
            );
          })}
    </>
  );
}

export default FeedPage;

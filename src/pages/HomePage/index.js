import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { api } from "../../api/api";

function HomePage() {
  const { loggedInUser } = useContext(AuthContext);

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      try {
        const response = await api.get("/users/all");
        setUsers([...response.data]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      {!loggedInUser && (
        <>
          <h1>Home</h1>
          <Link to="/sign-up">Sign up</Link>
          <></>
        </>
      )}

      <>
        <h1>user</h1>

        {!isLoading &&
          users.map((user) => {
            if (user._id !== loggedInUser.user._id) {
              return (
                <div key={user._id}>
                  <h1>{user.username}</h1>
                </div>
              );
            }
            return users;
          })}
      </>
    </div>
  );
}
export default HomePage;
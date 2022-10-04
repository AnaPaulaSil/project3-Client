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
        const response = await api.get("/users/guest-all"); //rota protegida
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
        <h1>Login</h1>

 
      </>
    </div>
  );
}
export default HomePage;

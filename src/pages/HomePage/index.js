import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { api } from "../../api/api";
import style from "./style.module.css"
import logo from "../../assets/conecta-vertical.png"


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
    <div div className={style.body}>
      {/* {!loggedInUser && ( */}
        <div className={style.formSignUp}>
          <>
          <img src={logo} style={{ width:"80%", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }}/>
          <Link className="btn btn-light" id={style.submit} style={{marginTop: "20px"}} to="/sign-up">Sign up</Link>

        </>
       {/* )} */}

      <>
        <Link className="btn btn-light" id={style.submit} style={{marginTop: "10px"}} to="/login">Login</Link>
    </>
      </div>
      </div>
  );
}
export default HomePage;

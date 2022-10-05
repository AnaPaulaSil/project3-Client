import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/conecta-vertical.png"; //feed
// import  {BsPersonFill}  from "react-icons/bs"; //profile
import style from "./style.module.css";

function Navbarr() {
  return (
    <>
      <div className={style.back}>

      <Navbar className={style.navbar}>
        <Link to={"/feed"}>
          <img
            src={logo}
            style={{ width: "68px" , padding: "4px" }}
          />
        
        </Link>
        <Link to={"/profile"}>
          {/* <BsPersonFill /> */}
          <p>Profile</p>
        </Link>
      </Navbar>
            </div>
    </>
  );
}

export default Navbarr;

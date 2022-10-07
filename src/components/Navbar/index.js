import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/conecta-vertical.png"; //feed
// import  {BsPersonFill}  from "react-icons/bs"; //profile
import style from "./style.module.css";
import { BsPersonFill } from "react-icons/bs"; //profile
import { BsFillArrowRightCircleFill } from "react-icons/bs"; //profile

function Navbarr() {
  return (
    <>
      <div className={style.back}>
        <Navbar className={style.navbar}>
          <div className={style.icons}>
          <Link to={"/feed"}>
            <img src={logo} style={{ width: "68px", padding: "4px" }} />
          </Link>
          <Link to={"/profile"}>
            <BsPersonFill style={{ color: "white", fontSize: "35px" }} />
          </Link>
          <Link style={{ color: "white", fontSize: "25px" }} to={"/"}>
            <BsFillArrowRightCircleFill />
          </Link>
          </div>
        </Navbar>
      </div>
    </>
  );
}

export default Navbarr;

import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/conecta-vertical.png"; //feed
// import  {BsPersonFill}  from "react-icons/bs"; //profile
import style from "./style.module.css";
import  {BsPersonFill}  from "react-icons/bs"; //profile
import  {BsFillArrowRightCircleFill}  from "react-icons/bs"; //profile


function Navbarr() {
  return (
    <>
      <div className={style.back} style={{alignItems: "center"}}>

      <Navbar className={style.navbar}>
        <Link to={"/feed"}>
          <img
            src={logo}
            style={{ width: "68px" , padding: "4px", marginLeft: "15px" }}
          />
        {/* <div> */}

        </Link>
        <div style={{marginLeft: "auto", padding: "15px"}}>
        <Link to={"/profile"}>
          <BsPersonFill style= {{color: "white", fontSize: "35px" }}/>
        </Link>
        <Link style= {{color: "white", fontSize: "25px" }} to={"/"}><BsFillArrowRightCircleFill/></Link>
      </div>
      </Navbar>
            </div>
    </>
  );
}

export default Navbarr;

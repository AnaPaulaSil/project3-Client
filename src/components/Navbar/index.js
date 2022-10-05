import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/dev-connetion-logo.png"; //feed
// import  {BsPersonFill}  from "react-icons/bs"; //profile

function Navbarr() {
  return (
    <>
      <Navbar style={{ backgroundColor: "red", display: "flex" }}>
        <Link to={"/feed"}>
          <img
            src={logo}
            style={{ width: "80px", justifyContent: "space-bettwen" }}
          />
        </Link>
        <Link to={"/profile"}>
          {/* <BsPersonFill /> */}
          <p>profile pode apagar esse p</p>
        </Link>
      </Navbar>
    </>
  );
}

export default Navbarr;

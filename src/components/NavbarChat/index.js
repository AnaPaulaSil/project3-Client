import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs"; 

function NavbarChat() {
    return (
        <>
        <Navbar style={{ backgroundColor: "grey", display: "flex" }}>
            <Link to={"/profile"}>
                <BsFillArrowLeftCircleFill/>
            </Link>
        </Navbar>
        </>
    )
}

export default NavbarChat
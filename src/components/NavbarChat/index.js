import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../api/api";

function NavbarChat() {
  const { idChat } = useParams();
  const [date, setDate] = useState({});

  useEffect(() => {
    async function fetchDate() {
      try {
        const response = await api.get(`/chat/messages/${idChat}`);
        // setDate(response.data);
        // console.log(response.data.users[0], "consolao");
        setDate(response.data.users[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDate();
  });

  //   console.log(date);

  return (
    <>
      <Navbar style={{ backgroundColor: "lightgrey", display: "flex" }}>
        {/* ESSA PORRA TAMBEM TA ERRADA */}
        <Link to={`/users/${date}`}>
          <BsFillArrowLeftCircleFill style={{color: "white", fontSize: "30px", marginLeft: "15px"}}/>
        </Link>
      </Navbar>
    </>
  );
}

export default NavbarChat;

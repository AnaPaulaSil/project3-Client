import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";
import { ChatRoom } from "../../components/ChatRoom/index";
import NavbarChat from "../../components/NavbarChat";
import style from "./style.module.css"

function ChatPage() {
  const { idChat } = useParams();
  const [chats, setChats] = useState([]);
  const [reload, setReload] = useState(false);
  const [form, setForm] = useState({
    mensagem: "",
  });

  // console.log(idChat);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post(`/chat/send-message/${idChat}`, form);
      //   console.log(response);
      setChats(response.data);
      // console.log(response.data);
      //setReload(!reload);
      setForm({
        mensagem: "",
      });
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(form);

  return (
    <>
      <NavbarChat />
      <h1>Chat</h1>

      <ChatRoom
        chats={chats}
        setReload={setReload}
        reload={reload}
        idChat={idChat}
        setChats={setChats}
      />

      <form className={style.form}>
          <input
          className={style.sendmsg}
            style={{
              display: "flex",
              padding: "5px",
              // position: "fixed",
              bottom: "0",
              // width: "100%",
              borderTop: "1px solid ligthgray",
            }}
            name="mensagem"
            type="text"
            value={form.mensagem}
            // placeholder="digite uma mensagem"
            onChange={handleChange}
          />
          <button
          className={style.sendbtn}
          style={{ border: "none",  color: "red" }}
          onClick={handleSubmit}
          >
            🔥
          </button>
            
      </form>
    </>
  );
}

export default ChatPage;

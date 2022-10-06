import { useState, useEffect, useContext } from "react";
import { api } from "../../api/api";
import { AuthContext } from "../../context/authContext";

export function ChatRoom({ setChats, chats, setReload, reload, idChat }) {
  const [loading, setLoading] = useState(true);
  const interval = 10000;
  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    async function fetchChat() {
      try {
        const response = await api.get(`/chat/messages/${idChat}`);
        setChats(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchChat();
  }, []);

  return (
    <>
      <div style={{ marginBottom: "12%" }}>
        {!loading &&
          chats.conversa.map((msg) => {
            return (
              <div
                className={
                  loggedInUser.user._id == msg.author
                    ? "myMessage"
                    : "otherMessage"
                }
              >
                <p style={{ fontSize: "18px" }}>{msg.mensagem}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

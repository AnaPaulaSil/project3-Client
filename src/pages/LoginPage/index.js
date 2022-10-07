import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import style from "./style.module.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSumit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/users/login", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/feed");
    } catch (error) {
      toast.error("E-mail ou senha incorretos");
      console.log(error);
    }
  }

  return (
    <>
      <div className={style.backgroundLogin}>
        <Container className="background-login">
          <Row className="justify-content-center">
            <Col md="4">
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h1>Login</h1>
                  </Card.Title>
                  <hr></hr>
                  <Form onSubmit={handleSumit}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email:</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Senha:</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Entrar
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import { api } from "../../api/api";

function EditProfilePage({
  form,
  id,
  setShowForm,
  setForm,
  reload,
  setReload,
  showForm,
}) {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      delete form._id;

      await api.put(`/users/edit`, form);

      setShowForm(false);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleDelete() {
    try {
      await axios.delete(`/users/profile/${id}`);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal show={showForm} onHide={() => setShowForm(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edite seu Perfil</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            name="cidade"
            value={form.cidade}
            onChange={handleChange}
          />

          <Form.Label>Bio</Form.Label>
          <Form.Control name="bio" value={form.bio} onChange={handleChange} />

          <Form.Label>Relacionamento: </Form.Label>
          <Form.Select
            name="type"
            onChange={handleChange}
            defaultValue={form.type}
          >
            <option value="Solteiro">Solteiro</option>
            <option value="Casado">Casado</option>
            <option value="Ficando">Ficando</option>
            <option value="Noivo">Noivo</option>
            <option value="Poliamor">Poliamor</option>
            <option value="Relacionamento monogâmico">
              Relacionamento monogâmico
            </option>
            <option value="Relacionamento não monogâmico">
              Relacionamento não monogâmico
            </option>
          </Form.Select>
        </Form>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Button
          variant="danger"
          className="text-light fw-semibold"
          onClick={handleDelete}
          size="sm"
        >
          Delete esse perfil
        </Button>
        <Button
          variant="success"
          onClick={handleSubmit}
          className="text-light fw-semibold"
          size="sm"
        >
          {" "}
          Salvar{" "}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditProfilePage;


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
      const clone = { ...form };
      delete clone._id;

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
      await api.delete(`/users/delete`);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  console.log(form);

  return (
    <Modal show={showForm} onHide={() => setShowForm(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edite seu Perfil</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>Cidade</Form.Label>
          <Form.Select name="cidade" onChange={handleChange} value={form.cidade}>
            <option value="Acre AC">Acre AC </option>
            <option value="Alagoas AL">Alagoas AL</option>
            <option value="Amapá AP ">Amapá AP </option>
            <option value="Amazonas AM">Amazonas AM</option>
            <option value="Bahia BA">Bahia BA</option>
            <option value="Ceará CE">Ceará CE</option>
            <option value="Distrito Federal DS">Distrito Federal DS</option>
            <option value="Espírito Santo ES">Espírito Santo ES</option>
            <option value="Goiás GO">Goiás GO</option>
            <option value="Maranhão MA">Maranhão MA</option>
            <option value="Mato Grosso MG">Mato Grosso MG</option>
            <option value="Mato Grosso do Sul MS">Mato Grosso do Sul MS</option>
            <option value="Minas Gerais MG">Minas Gerais MG</option>
            <option value="Pará PA">Pará PA</option>
            <option value="Paraíba PB">Paraíba PB</option>
            <option value="Paraná PR">Paraná PR</option>
            <option value="Piauí PI">Piauí PI</option>
            <option value="Rio de Janeiro RJ">Rio de Janeiro RJ</option>
            <option value="Rio Grande do Norte RN">
              Rio Grande do Norte RN
            </option>
            <option value="Rio Grande do Sul RS">Rio Grande do Sul RS</option>
            <option value="Rondônia RO">Rondônia RO</option>
            <option value="Roraima RR">Roraima RR</option>
            <option value="Santa Catarina SC">Santa Catarina SC</option>
            <option value="São Paulo SP">São Paulo SP</option>
            <option value="Sergipe SE">Sergipe SE</option>
          </Form.Select>

          <Form.Label>Bio</Form.Label>
          <Form.Control name="bio" value={form.bio} onChange={handleChange} />

          <Form.Label>Relacionamento: </Form.Label>
          <Form.Select
            name="statusRel"
            onChange={handleChange}
            value={form.statusRel}
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

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import Button from "react-bootstrap/Button";

function Signup() {
  const interesses = [
    { skill: "hardskills", selected: "outline-primary" },
    { skill: "ui ux", selected: "outline-primary" },
    { skill: "backend", selected: "outline-primary" },
    { skill: "cyber security", selected: "outline-primary" },
    { skill: "fullstack", selected: "outline-primary" },
  ];

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    age: "  ",
    sexo: "",
    dataNasc: "",
    orientacaoSexual: "",
    cidade: "",
    statusRel: "",
    interesses: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function changeButton(index, e) {
    if (e.target.className === "btn btn-primary") {
      e.target.className = "btn btn-outline-primary";
    } else {
      e.target.className = "btn btn-primary";
    }

    interesses[index].selected = "primary";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/user/signup", { ...form });

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          name="username"
          type="text"
          value={form.name}
          onChange={handleChange}
        />

        <label>E-mail:</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <label>Senha:</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />

        <label>Idade:</label>
        <input name="age" type="age" value={form.age} onChange={handleChange} />

        <label>Sexo:</label>
        <input
          name="sexo"
          type="sexo"
          value={form.sexo}
          onChange={handleChange}
        />
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Data de Nascimento:
          </label>
          <input
            className="form-control"
            id="formGroupExampleInput"
            name="dataNasc"
            type="date"
            placeholder="Data de Nascimento"
            // onchange={handleChange}
          />
        </div>

        <label htmlFor="formGroupExampleInput" className="form-label">
          Orientação Sexual:
        </label>
        <select
          className="form-control"
          name="orientacaoSexual"
          type="orientacaoSexual"
          onChange={handleChange}
        >
          <option>Hétero Sexual</option>
          <option>Gay</option>
          <option>Lésbica</option>
          <option>Bissexual</option>
          <option>Assexual</option>
          <option>Demisexual</option>
          <option>Pansexual</option>
          <option>Queer</option>
          <option>Outro</option>
        </select>
        <label for="formGroupExampleInput" className="form-label">
          Cidade
        </label>
        <select
          className="form-control"
          name="cidade"
          type="cidade"
          onChange={handleChange}
        >
          <option>Acre AC </option>
          <option>Alagoas AL</option>
          <option>Amapá AP </option>
          <option>Amazonas AM</option>
          <option>Bahia BA</option>
          <option>Ceará CE</option>
          <option>Distrito Federal DS</option>
          <option>Espírito Santo ES</option>
          <option>Goiás GO</option>
          <option>Maranhão MA</option>
          <option>Mato Grosso MG</option>
          <option>Mato Grosso do Sul MS</option>
          <option>Minas Gerais MG</option>
          <option>Pará PA</option>
          <option>Paraíba PB</option>
          <option>Paraná PR</option>
          <option>Piauí PI</option>
          <option>Rio de Janei</option>
          <option>Rio Grande d</option>
          <option>Rio Grande do Sul RS</option>
          <option>Rondônia RO</option>
          <option>Roraima RR</option>
          <option>Santa Catarina SC</option>
          <option>São Paulo SP</option>
          <option>Sergipe SE</option>
        </select>

        <div>
          <label>Status Relacionamento:</label>

          <button type="button" className="btn btn-light">
            Solteiro
          </button>
          <button type="button" className="btn btn-light">
            Casado
          </button>
          <button type="button" className="btn btn-light">
            Ficando
          </button>
          <button type="button" className="btn btn-light">
            Noivo
          </button>
          <button type="button" className="btn btn-light">
            Poliamor
          </button>
          <button type="button" className="btn btn-light">
            Relacionamento monogâmico
          </button>
          <button type="button" className="btn btn-light">
            Relacionamento não monogâmico
          </button>
        </div>

        <div>
          <label for="formGroupExampleInput" classNameName="form-label">
            Interesses em:
          </label>
          {interesses.map((interes, index) => {
            return (
              <Button
                variant={interes.selected}
                onClick={(e) => {
                  changeButton(index, e);
                }}
              >
                {interes.skill}
              </Button>
            );
          })}
        </div>

        <button type="submit" className="btn btn-light">
          Cadastrar
        </button>
      </form>
    </>
  );
}

export default Signup;

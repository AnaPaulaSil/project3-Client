import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import Button from "react-bootstrap/Button";

function Signup() {
  const interesses = [
    { skill: "Front-end", selected: "outline-danger" },
    { skill: "Back-end", selected: "outline-danger" },
    { skill: "Full-stack", selected: "outline-danger" },
    { skill: "UX-UI", selected: "outline-danger" },
    { skill: "Cyber security", selected: "outline-danger" },
    { skill: "Hard skill", selected: "outline-danger" },
    { skill: "Soft skill", selected: "outline-danger" },
    { skill: "WEB DEV", selected: "outline-danger" },
  ];

  const relacionamento = [
    { status: "Solteiro", selected: "outline-danger" },
    { status: "Casado", selected: "outline-danger" },
    { status: "Ficando", selected: "outline-danger" },
    { status: "Noivo", selected: "outline-danger" },
    { status: "Poliamor", selected: "outline-danger" },
    { status: "Relacionamento monogâmico", selected: "outline-danger" },
    { status: "Relacionamento não monogâmico", selected: "outline-danger" },
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
    interesses: [],
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  //interesses
  function changeButton(index, e) {
    if (e.target.className === "btn btn-danger") {
      e.target.className = "btn btn-outline-danger";
    } else {
      e.target.className = "btn btn-danger";
    }

    interesses[index].selected = "danger";
    const clone = { ...form };
    clone.interesses.push(e.target.outerText);
    setForm(clone);
  }

  //statusrel
  function changeBtn(lista, e) {
    if (e.target.className === "btn btn-danger") {
      e.target.className = "btn btn-outline-danger";
    } else {
      e.target.className = "btn btn-danger";
    }
    console.log(e);
    relacionamento[lista].selected = "danger";
    setForm({ ...form, statusRel: e.target.outerText });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/users/sign-up", form);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  console.log(form);
  return (
    <>
      <label className="font: Poppins-Bold font-size: 39px color: #333">
        <h1>Welcome</h1>
      </label>

      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          name="username"
          type="text"
          value={form.username}
          onChange={handleChange}
        />

        <label>E-mail:</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="mb-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
        />
        <label>Senha:</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />

        <div>
          <label>Idade:</label>
          <input
            name="age"
            type="age"
            value={form.age}
            onChange={handleChange}
          />
        </div>

        <label htmlFor="formGroupExampleInput" className="form-label">
          Sexo:
        </label>
        <select
          className="form-control"
          name="sexo"
          type="sexo"
          onChange={handleChange}
        >
          <option>Feminino</option>
          <option>Masculino</option>
          <option>Outros</option>
        </select>

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
            onChange={handleChange}
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
        <label htmlFor="formGroupExampleInput" className="form-label">
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
          <label htmlFor="formGroupExampleInput" className="form-label">
            Relacionamento:
          </label>
          {relacionamento.map((rel, lista) => {
            return (
              <Button
                variant={rel.selected}
                onClick={(e) => {
                  changeBtn(lista, e);
                }}
              >
                {rel.status}
              </Button>
            );
          })}
        </div>

        <div>
          <label htmlFor="formGroupExampleInput" className="form-label">
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
          Sign In
        </button>
      </form>
    </>
  );
}

export default Signup;

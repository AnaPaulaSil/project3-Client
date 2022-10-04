import { useState } from "react";


function Signup() {

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    age: 0,
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

  return (
    <form>
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

      <label for="formGroupExampleInput" class="form-label">
        Data de Nascimento:
      </label>
      <input
        name="dataNasc"
        type="date"
        value={form.dataNasc}
        onchange={handleChange}
      />

      <label for="formGroupExampleInput" class="form-label">
        Orientação Sexual:
      </label>
      <select
        className="form-control"
        name="orientacaoSexual"
        type="orientacaoSexual"
        onChange={handleChange}
      >
        <option>Hetero Sexual</option>
        <option>Gay</option>
        <option>Lésbica</option>
        <option>Bissexual</option>
        <option>Assexual</option>
        <option>Demi Sexual</option>
        <option>Pan Sexual</option>
        <option>Queer</option>
        <option>Outro</option>
      </select>
      <label for="formGroupExampleInput" class="form-label">
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

      <label for="formGroupExampleInput" class="form-label">
        {" "}
        Status Relacionamento:
      </label>
      <select
        className="form-control"
        name="statusRel"
        type="statusRel"
        onChange={handleChange}
      >
        <option>Solteiro</option>
        <option>Casado</option>
        <option>Enrolado</option>
        <option>Ficando</option>
        <option>Relacionamento monogamico</option>
        <option>Relacionamento não monogamico</option>
        <option>Poliamor</option>
        <option>Noivo</option>
        <option></option>
      </select>

      <label for="formGroupExampleInput" class="form-label">
        {" "}
        Interesses em:
      </label>
      <select
        className="form-control"
        name="interesses"
        type="interesses"
        onChange={handleChange}
      >
        <option>Back-end</option>
        <option>Front-end</option>
        <option>Soft skills</option>
        <option>Hard Skills</option>
        <option>Full-stack</option>
        <option>UX-UI</option>
        <option>Web dev</option>
        <option>Data analytics</option>
        <option>Cybersecurity</option>
      </select>
    </form>
  );
}

export default Signup;

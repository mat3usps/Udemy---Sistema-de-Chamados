import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Sistema Logo" />
        </div>

        <form>
          <h1>Cadastrar uma Conta</h1>
          <input
            type="text"
            placeholder="nome"
            values={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Acessar</button>
        </form>

        <Link to="/">Já possui uma conta? Entre</Link>
      </div>
    </div>
  );
}

export default SignUp;

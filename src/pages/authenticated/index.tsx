/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import InputDefault from "../../components/InputDefault";
import ButtonDefault from "../../components/ButtonDefault";
import { IconWaening } from "../../components/icons";
import useAuthDada from "../../data/hook/useAuthData";

export default function Authenticated() {
  const { user, loginGoogle } = useAuthDada();

  const [error, setError] = useState(null);
  const [mode, setMode] = useState<"login" | "registration">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function showError(msg, time = 5) {
    setError(msg);
    setTimeout(() => setError(null), time * 1000);
  }

  function submitValue() {
    if (mode === "login") {
      console.log("login");
      showError("Ocorreu um error no login!");
    } else {
      console.log("cadastrar");
      showError("Ocorreu um error no cadastro!");
    }
  }

  return (
    <div className={`flex justify-center items-center  h-screen`}>
      <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
        <img
          src="https://source.unsplash.com/random"
          alt="Imagem da tela de autenticação"
          className={` h-screen w-full object-cover`}
        />
      </div>
      <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
        <h1 className={`text-3xl font-bold mb-5`}>
          {mode === "login"
            ? "Entre com a sua conta"
            : "Cadastre-se na plataforma"}
        </h1>

        {error ? (
          <div
            className={`
            flex items-center
            py-3 px-5 my-2
            bg-red-400 text-white
            border border-red-700
            rounded-lg
          `}
          >
            {IconWaening()} <span className={`mx-2`}>{error}</span>
          </div>
        ) : (
          false
        )}

        <InputDefault
          label={"Email"}
          type={"email"}
          value={email}
          placeholder={"Digíte seu e-mail"}
          onChangeValue={setEmail}
          isRequired
        />
        <InputDefault
          label={"Senha"}
          type={"password"}
          value={password}
          placeholder={"Digíte sua senha"}
          onChangeValue={setPassword}
          isRequired
        />
        <ButtonDefault
          title={mode === "login" ? "Entra" : "Cadastrar"}
          onClick={submitValue}
          bgColor={"bg-indigo-500"}
          textColor={"text-white"}
          hover={"hover:bg-indigo-400"}
          margin={"mt-6"}
          padding={"py-4"}
        />
        <hr className={`my-6 border-gray-300 w-full`} />
        <ButtonDefault
          title={"Entrar com google"}
          onClick={loginGoogle}
          bgColor={"bg-red-500"}
          textColor={"text-white"}
          hover={"bg-red-500"}
          padding={"py-4"}
        />
        {mode === "login" ? (
          <p className={`mt-8 flex flex-col`}>
            Novo por aqui?
            <a
              onClick={() => setMode("registration")}
              className={`text-blue-500 hover:text-blue-700 font-semibold`}
            >
              Crie uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className={`mt-8 flex flex-col`}>
            Já faz parte da nossa comunidade?
            <a
              onClick={() => setMode("login")}
              className={`text-blue-500 hover:text-blue-700 font-semibold`}
            >
              Entre com a suas credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

import React from "react";
import { useState } from "react";
import "../styles/Style.css";
export default function Page() {
  const [initial, setMode] = useState(true);
  const modeDark = "modo-escuro";
  const modeLight = "modo-claro";
  const Dark = "Assets/moon.png";
  const Light = "Assets/sun.png";
  const bDark = "Dark";
  const bLight = "Light";
  const textoLight = "Light";
  const textoDark = "Dark";

  function Mode() {
    setMode(!initial);
  }

  return (
    <div className={initial ? modeLight : modeDark}>
      <header>
        <div className="logo">
          <img src="Assets/barbearia-logo.png" alt="logo" />
        </div>
        <button className={initial ? bLight : bDark} onClick={Mode}>
          <div>
            <img
              className="img-button"
              src={initial ? Light : Dark}
              alt="moon"
            />
            <span>{initial ? textoLight : textoDark}</span>
          </div>
        </button>
      </header>
      <main>
        <section className="first-section"></section>
        <section className="second-section">
          <h1>Bem vindo a Barber Shop</h1>
          <p>
            <b>
              Nossa barbearia sempre oferece profissionais de qualidade e
              estamos prontos para lidar com suas maiores expectativas.
            </b>
          </p>
          <p>
            Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma
            equipe premiada que demonstrou o talento de mestres barbeiros em
            vários concursos de estilo. Deixe nosso barbeiro ser seu estilista
            pessoal e você nunca ficará desapontado.
          </p>
          <p className="nome">S. Kelly</p>
        </section>
      </main>
    </div>
  );
}

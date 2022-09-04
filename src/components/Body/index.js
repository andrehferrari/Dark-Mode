import React from "react";
import './style.css'
import capa from '../../assets/banner-barbearia.jpg'

function Conteudo(props) {
  return (
    <main className={props.modo}>
        <section className="secao-capa">
            <img src={capa}/>
        </section>
        <section className="secao-principal">
            <h1>Bem-vindo a Barber Shop</h1>
            <p className="primeiro-paragrafo">
                Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
            </p>
            <p className="segundo-paragrafo">
                Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
            </p>
        </section>
    </main>
  );
}

export default Conteudo;
import React from "react";
import './style.css'
import logo from '../../assets/barbearia-logo.png'
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png'

function Header(props) {

  function toggleMode() {
    if(props.modo == 'desligado'){
      props.estado('ligado')
    } 
    else if(props.modo == 'ligado'){
      props.estado('desligado')
    }
  }

  return (
    <header className={props.modo}>
        <div className="limita-secao">
            <img src={logo} className="logo" />
            <button 
            onClick={() => toggleMode()}
            className="btn-toggle">
                <img src={props.modo == 'desligado' ? moon : sun}/>
                <p>{props.modo == 'desligado' ? 'Dark':'Light'}</p>
            </button>
        </div>
    </header>
  );
}

export default Header;
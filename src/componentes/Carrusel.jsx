import styled from "styled-components";
import { HeaderContainer, Logo, Nav } from '../componentes/CarruselStyle';

function Carrusel() {
 
  return (
    <div>
      <HeaderContainer>
        <Logo src="ruta_del_logo.png" alt="Logo de Mi Sitio Web" />
        <Nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </Nav>
      </HeaderContainer>

      
    </div>
  );
}

export default Carrusel;

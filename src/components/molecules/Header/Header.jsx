import Logo from "../../atoms/Logo/Logo";
import Nav from "../../atoms/Nav/Nav";
import "./Header.css";

function Header() {
  return (
    <header className="header">
        <Logo />
        <Nav text1="Inicio" text2="Favoritos" text3="Tipos" text4="Contacto" />
    </header>
  )
}

export default Header
import "./Nav.css";

export default function Nav({ text1, text2, text3, text4 }) {
  return (
    <nav className="navbar">
        <ul className="nav-items">
            <li>{ text1 }</li>
            <li>{ text2 }</li>
            <li>{ text3 }</li>
            <li>{ text4 }</li>
        </ul>
    </nav>
  )
}

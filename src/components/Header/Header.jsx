import './Header.css';
import NavLink from './NavLink';

export default function Header() {
  return (
    <header>
      <div className="container row">
        <h1>Multimedijalni Sustavi</h1>
        <nav className="main__nav">
          <NavLink title="Početna" />
          <NavLink title="Projekti" />
          <NavLink title="Nositelji" />
        </nav>
      </div>
    </header>
  );
}

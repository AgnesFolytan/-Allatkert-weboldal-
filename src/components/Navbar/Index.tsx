import './Index.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

export function Navbar(){
    return <div id="app">
    <nav className="navbar navbar-expand-lg bg-danger-subtle">
      <div className="container-fluid">
        <span className="navbar-brand">Fény Fauna Állatkert</span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Főoldal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/allatok">Állatok</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/programok">Programok</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/nyitvatartas">Nyitvatartás</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/kapcsolat">Kapcsolat</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
}
import './Index.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

export function Navbar(){
    return <div id="app">
    <nav className="navbar navbar-expand-lg" id='navbarBg'>
      <div className="container-fluid">
        <span className="navbar-brand" id='text'>
          <img src="../../../img/icon.png" width={50}/>&ensp;Fény Fauna Állatkert</span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" id='textLink' href="/">Főoldal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id='textLink' href="/allatok">Állatok</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id='textLink' href="/programok">Programok</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id='textLink' href="/nyitvatartas">Nyitvatartás</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id='textLink' href="/kapcsolat">Kapcsolat</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
}
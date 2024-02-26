import './Index.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

export function Navbar(){
    return
        <nav className="navbar navbar-expand-lg bg-danger-subtle">
            <div className="container-fluid">
            <span className="navbar-brand">Fény Fauna Állatkert</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Főoldal</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/programok">Programok</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/allatok">Állatok</a>
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
}
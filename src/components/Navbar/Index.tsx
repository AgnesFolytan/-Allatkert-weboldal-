import './Index.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

export function Navbar(){
    <nav className="navbar navbar-expand-lg bg-danger-subtle">
        <div className="container-fluid">
        <span className="navbar-brand">Fény Fauna Állatkert</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="index.html">Főoldal</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="etlap.html">Programok</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="etlap.html">Állatok</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="nyitvatartas.html">Nyitvatartás</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="kapcsolat.html">Kapcsolat</a>
        </li>
        </ul>
        </div>
        </div>
</nav>
}
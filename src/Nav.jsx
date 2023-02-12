import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-secondary  rounded-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          <img src="./public/favicon.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top m-1" />
          T/M</Link>
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/GroupTeam">Team-Members</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav;
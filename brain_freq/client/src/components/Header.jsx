import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="app-header">
      <h1 className="app-title m-2">Brain Freq</h1>
      <div className="menu-wrap">
        <div className="menu-left">
          {Auth.loggedIn() ? (
            <>
              <button className="m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="m-2" to="/login">
                Login
              </Link>
              <Link className="m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
        <div className="menu-right">
          <Link className="m-2" to="/">Home</Link>
          <Link className="m-2" to="/about">About</Link>
          <Link className="m-2" to="/contact">Contact</Link>
        </div>

      </div>
    </header>

  )
}
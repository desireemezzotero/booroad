import { useState } from "react";

const NavBar = () => {

  const [showOffcanvas, setShowOffcanvas] = useState(false);


  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <a className="navbar-brand fw-bold text-light" href="/">
              <img
                src="../public/img/Logo1.png"
                alt="Logo Booroad"
                className="logo mx-2"
              />
              BooRoad
            </a>
          </div>
          <button
            className="btn btn-outline-light"
            type="button"
            onClick={toggleOffcanvas}
          >
            Accedi
          </button>


          <div
            className={`offcanvas offcanvas-end ${showOffcanvas ? "show" : ""}`}
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">
                Accedi
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={toggleOffcanvas}
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <form>
                <div className="mb-3">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"

                  />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="text"
                    className="form-control"
                    name="password"
                  />
                </div>
              </form>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

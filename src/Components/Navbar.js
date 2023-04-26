import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 782 });
  return isMobile ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 782, maxWidth: 992 });
  return isTablet ? children : null;
};
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

function Navbar(props) {
  const { search, open } = props;
  const [login, setLogin] = useState(false);

  function onClick(e) {
    if (login === false) {
      setLogin(true);
    }
    if (login === true) {
      setLogin(false);
    }
    e.preventDefault();
  }
  return (
    <>
      <div className="nav-box">
        <div id="top" className="navbar-section">
          <div className="navbar-head">
            <div className="nav-container">
              <nav className="navbar">
                <div className={login ? "nav-menu" : "nav-menu active"}>
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <img
                        className="title"
                        alt="Estado de Minas"
                        src="imagens/jornal-estado-de-minas-logo.png"
                      ></img>
                    </li>
                    <li className="nav-item active">
                      <Desktop>
                        <div className="right-pull">
                          <div className="icon-circle">
                            <a
                              href="https://api.whatsapp.com/send?phone=5531991820805&text=Gostei%20desse%20layout%20Lucas!%20:)"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                className="whatsapp-icon nav-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                              </svg>
                            </a>
                          </div>
                          <button className="btn btn-assine-desktop">
                            Assine
                          </button>

                          <img
                            className="logged-user"
                            src="imagens/logged-user.png"
                            alt="usuario"
                          ></img>
                        </div>
                        <div className="search" onClick={search}>
                          <img
                            className="search-icon"
                            src="imagens/search-icon.png"
                            alt="search"
                          ></img>
                          {open && (
                            <input className="search-page" input="text"></input>
                          )}
                        </div>
                        <span className="topico">Política</span>
                        <div className="breadcrumb">
                          <span className="crumbs">
                            <a className="home" href="/">
                              Início
                            </a>
                          </span>
                          <img
                            className="arrow"
                            src="imagens/arrow.png"
                            alt="arrow"
                          ></img>
                          <span className="crumbs">
                            <a className="home" href="/politica">
                              Política
                            </a>
                          </span>
                        </div>
                      </Desktop>
                      <Tablet>
                        <div className="right-pull tablet">
                          <button className="btn btn-assine-desktop">
                            Assine
                          </button>
                        </div>
                      </Tablet>
                      <Mobile>
                        <button className="btn btn-assine">Assine</button>
                      </Mobile>
                    </li>
                  </ul>
                  <div onClick={onClick} className="hamburguer">
                    <hr className="hamburguer-top hamburguer-desktop"></hr>
                    <hr className="hamburguer-mid hamburguer-desktop"></hr>
                    <hr className="hamburguer-bottom hamburguer-desktop"></hr>

                    <div className="logo-container">
                      <p>Sessões</p>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

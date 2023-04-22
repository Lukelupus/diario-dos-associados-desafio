import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
function Navbar() {

    const [active, setActive] = useState(false)

    function onClick(e) {
        
        if(active === false) {
            setActive(true)
        } 
        if (active === true) {
            setActive(false)
        }
     e.preventDefault()
    }
    return(<>

    <section id="top" className="navbar-section">
    <div className="navbar-head">
        <div className="nav-container">
            <nav className="navbar">
                <div className="logo-container">
                    <p>Sessões</p>
                </div>
                <div className={active ? "nav-menu" : "nav-menu active" }>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <img className="btn-orange" alt="Estado de Minas" src="imagens/jornal-estado-de-minas-logo.png"></img>
                        </li>
                        <li className="nav-item active">
                            <button className="btn btn-assine">Assine</button>
                        </li>
                    </ul>
                    <div onClick={onClick} className="hamburguer">
                  
                      <Mobile>
                        <hr className="hamburguer-top"></hr>
                        <hr className="hamburguer-mid"></hr>
                        <hr className="hamburguer-bottom"></hr>

                      </Mobile>
                            
                    </div>
                </div>

            </nav>
        </div>
     
    </div>
   
    </section>
    </>
    )
}

export default Navbar
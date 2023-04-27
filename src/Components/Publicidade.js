import React from "react";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 992 });
  return isMobile ? children : null;
};
function Publicidade(props) {
  return (
    <section className="ad-section">
      <div className="ad-box">
        <h3 className="publicidade">Publicidade</h3>
        {props.anuncios.map((e, index) => {
          return e.mobile ? (
            <Mobile>
              {" "}
              <a key={index} href={e.href} rel="noreferrer" target="_blank">
                {" "}
                <img
                  key={index}
                  className="ad-img"
                  alt={e.alt}
                  src={e.src}
                ></img>
              </a>
            </Mobile>
          ) : (
            <Desktop>
              <a key={index} href={e.href} rel="noreferrer" target="_blank">
                {" "}
                <img
                  key={index}
                  className="ad-img"
                  alt={e.alt}
                  src={e.src}
                ></img>
              </a>
            </Desktop>
          );
        })}

        <Mobile>
          <a href={props.href} rel="noreferrer" target="_blank">
            {" "}
            <img className="ad-img" alt={props.alt} src={props.src}></img>
          </a>
        </Mobile>
      </div>
    </section>
  );
}

export default Publicidade;

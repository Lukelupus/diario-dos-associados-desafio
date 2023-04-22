import React from "react";
import { useMediaQuery } from "react-responsive"

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
function Publicidade(props) {
return (
<section className="ad-section">
<div className="ad-box">
<h3 className="publicidade">Publicidade</h3>
    <Desktop>
     
    </Desktop>
    <Mobile>
   <a href={props.href} rel="noreferrer" target="_blank"> <img className="ad-img" alt={props.alt} src={props.src}></img>
   </a>
    </Mobile>
</div>
</section>
)
}


export default Publicidade
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

<h3 className="publicidade">Publicidade</h3>
    <Desktop>
     
    </Desktop>
    <Tablet>
       
    </Tablet>
    <Mobile>
       
    </Mobile>

</section>
)
}


export default Publicidade
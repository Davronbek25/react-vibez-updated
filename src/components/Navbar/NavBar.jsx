import React, { useEffect, useRef } from 'react'
import NavbarSub from './NavbarSub'

const NavBar = () => {
  const nav = useRef()
  useEffect(() => {
    if(nav.current !== undefined ){
      window.onscroll = function () {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
          nav.current.classList.replace("transparent-bg", "nav-bg");
        } else {
          nav.current.classList.replace("nav-bg", "transparent-bg");
        }
      };
    }
  }, [nav.current])
  
  return (
    <div className="container-fluid g-0 transparent-bg" ref={nav} id="nav">
        <div className="row d-flex justify-content-between w-100 align-items-center h-100">
            <div className="col braces">
                <img src="./imgs/above-before (2).png" width={32} alt="" />
                <img src="./imgs/above-next.png" width={32} alt="" />
            </div>
           <NavbarSub/>
        </div>
    </div>
  )
}

export default NavBar
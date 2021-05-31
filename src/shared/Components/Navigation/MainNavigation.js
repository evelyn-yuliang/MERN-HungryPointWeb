import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";
import Backdrop from "./Backdrop";
import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";


const MainNavigation = (props) => {
    const [drawerIsOpen,setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true);
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false);
    }
  return (
    <React.Fragment>
        {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
            <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
            <nav className="main-navigation__drawer-nav">
              <NavLinks />
            </nav>
          </SideDrawer>
      
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <span className="main-navigation_title">
          <Link to="/">HungryPoint</Link>
        </span>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;

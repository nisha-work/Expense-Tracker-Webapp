import React, { useState } from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import useUserAuth from "../../hooks/useUserAuth";

const DashboardLayout = ({ children, activeMenu }) => {
  useUserAuth();
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(activeMenu);

  return (
    <>
      <Navbar 
        openSideMenu={openSideMenu}
        setOpenSideMenu={setOpenSideMenu}
      />

      <div className="flex">

        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <SideMenu 
            activeMenu={selectedMenu}
            setActiveMenu={(id) => setSelectedMenu(id)}
          />
        </div> 

        {/* Mobile Sidebar */}
        {openSideMenu && (
          <div className="lg:hidden fixed top-[61px] left-0 bg-white z-50">
            <SideMenu 
              activeMenu={selectedMenu}
              setActiveMenu={(id) => {
                setSelectedMenu(id);
                setOpenSideMenu(false);
              }}
            />
          </div>
        )}

        {/* PAGE CONTENT — this MUST show the page */}
        <div className="flex-1 p-6">
          {children}
        </div>

      </div>
    </>
  );
};

export default DashboardLayout;

import React from "react";
import { CNav, CNavItem, CNavLink } from "@coreui/react";

const TopNav = () => {
  return (
    <div id="topnav">
      <CNav className="justify-content-end">
        <CNavItem>
          <CNavLink href="#">Pendukung</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">MagangAlam</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Merchandise</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Blog</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">FAQ</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Kontak</CNavLink>
        </CNavItem>
      </CNav>
    </div>
  );
};

export default TopNav;

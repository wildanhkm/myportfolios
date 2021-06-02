import React, { useState } from "react";
import {
  CButton,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormControl,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
} from "@coreui/react";
import LindungiHutan from "../images/logo_lindungihutan.png";
import { PersonFill } from "react-bootstrap-icons";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CNavbar expand="lg" id="navbar">
        <CContainer fluid>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarBrand href="#">
              <img src={LindungiHutan} alt="logo lindungi hutan" />
              <span>LindungiHutan</span>
            </CNavbarBrand>
            <CForm className="d-flex">
              <CFormControl
                id="form"
                type="search"
                className="me-2"
                placeholder="Cari kampanye alam"
              />
            </CForm>
            <CNavbarNav id="navbar-right">
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle color="secondary">Projek</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">SatuHutan</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">HutanMerdeka</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">RawatBumi</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">KadoBumi</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">CollaboraTree</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">LivePlanting</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">KampanyeAlam</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Buat Kampanye</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle color="secondary">Partner</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Relawan</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Partner</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">CollaboraTree</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">CSR</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Petani</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle color="secondary">
                  Tentang Kami
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Kegiatan</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Profil</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Team</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Dampak</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CButton id="btn-login">
                <PersonFill />
              </CButton>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
};

export default Navbar;

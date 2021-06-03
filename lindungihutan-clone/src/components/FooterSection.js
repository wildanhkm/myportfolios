import React from "react";
import { CButton, CCol, CContainer, CRow } from "@coreui/react";
import LindungiHutan from "../images/logo_lindungihutan.png";

const FooterSection = () => {
  return (
    <CContainer className="my-5 py-5">
      <CRow>
        <CCol xs={12} sm={6} md={4}>
          <img src={LindungiHutan} alt="logo lindungi hutan" />
          <span>LindungiHutan</span>
          <p className="bold">
            Website Penggalangan Dana Online untuk Konservasi Hutan dan
            Lingkungan.
          </p>
          <p>
            Yayasan Lindungi Hutan resmi berbadan hukum dan memiliki Izin
            Pengumpulan Sumbangan pada SK Kemensos No. 409/HUK-PS/2021.
          </p>
        </CCol>
        <CCol xs={5} sm={3} md={2}>
          <h4>Tentang Kami</h4>
          <CButton type="link" className="link">
            Cara Kerja
          </CButton>
          <CButton type="link" className="link">
            Profil
          </CButton>
          <CButton type="link" className="link">
            Team
          </CButton>
        </CCol>
        <CCol xs={7} sm={3} md={2}>
          <CButton type="link" className="link">
            Kebijakan dan Privasi
          </CButton>
          <CButton type="link" className="link">
            FAQ
          </CButton>
          <CButton type="link" className="link">
            Kontak
          </CButton>
        </CCol>
        <CCol sm={4} md={2}>
          <CButton type="link" className="link">
            Syarat dan Ketentuan
          </CButton>
          <CButton type="link" className="link">
            Mitra Alam
          </CButton>
          <CButton type="link" className="link">
            Menjadi Mitra
          </CButton>
        </CCol>
        <CCol sm={4} md={2}>
          <CButton type="link" className="link">
            Relawan
          </CButton>
        </CCol>
        <CCol sm={12} md={12}></CCol>
        <CCol sm={12} md={12}></CCol>
      </CRow>
    </CContainer>
  );
};

export default FooterSection;

import React from "react";
import { CButton, CCol, CContainer, CRow } from "@coreui/react";

const PartnerSection = () => {
  return (
    <section>
      <CContainer className="my-5 py-5">
        <CRow>
          <CCol>
            <h2
              style={{ color: "black", textAlign: "center", margin: "3rem 0" }}
            >
              Mitra Alam
            </h2>
          </CCol>
        </CRow>
        <CRow>
          <CCol>pln</CCol>
        </CRow>
        <CRow className="my-5">
          <CCol style={{ textAlign: "center" }}>
            <CButton className="btn-lihat">Lihat Partner</CButton>
          </CCol>
        </CRow>
      </CContainer>
    </section>
  );
};

export default PartnerSection;

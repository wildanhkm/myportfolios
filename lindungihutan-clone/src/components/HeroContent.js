import { CButton, CCol, CContainer, CRow } from "@coreui/react";
import React from "react";
import "../App.css";

const HeroContent = (props) => {
  const { heading, subheading, button, image, link } = props;
  return (
    <section>
      <CContainer className="my-5 py-5">
        <CRow>
          <CCol>
            <img src={image} alt="gif" />
          </CCol>
          <CCol>
            <h2 style={{ textAlign: "center", color: "black" }}>{heading}</h2>
            <h3
              style={{ textAlign: "center", color: "black", fontSize: "18px" }}
            >
              {subheading}
            </h3>
            <CButton id="kampanye">{button}</CButton>
            <CButton id="link">{link}</CButton>
          </CCol>
        </CRow>
      </CContainer>
    </section>
  );
};

export default HeroContent;

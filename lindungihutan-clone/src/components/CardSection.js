import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CContainer,
  CProgress,
  CProgressBar,
  CRow,
} from "@coreui/react";
import OhMySkin from "../images/ohmyskin.png";
import SoHyun from "../images/sohyun.png";
import Twice from "../images/twice.png";

const CardSection = () => {
  return (
    <section>
      <CContainer className="my-5 py-5">
        <CRow xs sm md={{ gutterX: 1 }}>
          <h2 style={{ color: "black", textAlign: "center", margin: "3rem 0" }}>
            Apa aksi nyatamu hari ini?
          </h2>
          <CCol xs sm md={4}>
            <CCard style={{ height: "28rem", width: "22rem" }}>
              <CCardImage
                component="img"
                orientation="top"
                className="docs-placeholder-img"
                width="100%"
                height="220"
                role="img"
                aria-label="OhMySkin banner"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                src={OhMySkin}
              ></CCardImage>
              <CCardBody>
                <CCardTitle>Our Smallest Thing Matters</CCardTitle>
                <CCardText>Campaigner: CV. Ohmyskin Natura Indonesia</CCardText>
                <CProgress className="my-3" height={5}>
                  <CProgressBar color="success" value={100} />
                </CProgress>
                <CRow>
                  <CCol xs sm md={8}>
                    <p>
                      <b>469 </b>
                      Pohon Terkumpul
                    </p>
                  </CCol>
                  <CCol xs sm md={4}>
                    <p>
                      <b>1 </b>
                      Hari Lagi
                    </p>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs sm md={4}>
            <CCard style={{ height: "28rem", width: "22rem" }}>
              <CCardImage
                component="img"
                orientation="top"
                className="docs-placeholder-img"
                width="100%"
                height="220"
                role="img"
                aria-label="OhMySkin banner"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                src={SoHyun}
              ></CCardImage>
              <CCardBody>
                <CCardTitle>
                  100 pohon untuk hari ulang tahun Kim So Hyun
                </CCardTitle>
                <CCardText>Campaigner: Asya Krmh</CCardText>
                <CProgress className="my-3" height={5}>
                  <CProgressBar color="success" value={100} />
                </CProgress>
                <CRow>
                  <CCol xs sm md={8}>
                    <p>
                      <b>108 </b>
                      Pohon Terkumpul
                    </p>
                  </CCol>
                  <CCol xs sm md={4}>
                    <p>
                      <b>1 </b>
                      Hari Lagi
                    </p>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs sm md={4}>
            <CCard style={{ height: "28rem", width: "22rem" }}>
              <CCardImage
                component="img"
                orientation="top"
                className="docs-placeholder-img"
                width="100%"
                height="220"
                role="img"
                aria-label="OhMySkin banner"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                src={Twice}
              ></CCardImage>
              <CCardBody>
                <CCardTitle>150 Pohon Chae Dahyun Tzuyu Twice</CCardTitle>
                <CCardText>Campaigner: Sanatwice201</CCardText>
                <CProgress className="my-3" height={5}>
                  <CProgressBar color="success" value={45} />
                </CProgress>
                <CRow>
                  <CCol xs sm md={8}>
                    <p>
                      <b>66 </b>
                      Pohon Terkumpul
                    </p>
                  </CCol>
                  <CCol xs sm md={4}>
                    <p>
                      <b>3 </b>
                      Hari Lagi
                    </p>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow className="my-5">
          <CCol style={{ textAlign: "center" }}>
            <CButton className="btn-lihat">Lihat Semua</CButton>
          </CCol>
        </CRow>
      </CContainer>
    </section>
  );
};

export default CardSection;

import React from "react";
import { CButton, CCol, CContainer, CRow } from "@coreui/react";
import UniversalVolunteer from "../images/universalvolunteer.png";
import Peppernik from "../images/peppernik.png";
import Elita from "../images/elita.png";
import Gulaliku from "../images/gulaliku.png";
import BumiBuddies from "../images/bumibuddies.png";
import PLN from "../images/pln.png";
import JadeClover from "../images/jadeclover.png";
import Sustaination from "../images/sustaination.png";
import KlenKind from "../images/klenkind.png";
import Akset from "../images/akset.png";
import DBS from "../images/dbs.png";
import WiseSteps from "../images/wisesteps.jpg";
import BodyShop from "../images/bodyshop.jpg";
import Mendekor from "../images/mendekor.jpg";
import Ingredion from "../images/ingredion.png";

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
        <CRow className="my-2">
          <CCol className="partner">
            <img
              className="grey-hover"
              src={UniversalVolunteer}
              alt="partner"
            />
            <img className="grey-hover" src={Peppernik} alt="partner" />
            <img className="grey-hover" src={Elita} alt="partner" />
            <img className="grey-hover" src={Gulaliku} alt="partner" />
            <img className="grey-hover" src={BumiBuddies} alt="partner" />
            <img className="grey-hover" src={PLN} alt="partner" />
            <img className="grey-hover" src={JadeClover} alt="partner" />
            <img className="grey-hover" src={Sustaination} alt="partner" />
            <img className="grey-hover" src={KlenKind} alt="partner" />
            <img className="grey-hover" src={Akset} alt="partner" />
          </CCol>
        </CRow>
        <CRow className="my-2">
          <CCol className="partner2">
            <img className="grey-hover" src={DBS} alt="partner" />
            <img className="grey-hover" src={WiseSteps} alt="partner" />
            <img className="grey-hover" src={BodyShop} alt="partner" />
            <img className="grey-hover" src={Mendekor} alt="partner" />
            <img className="grey-hover" src={Ingredion} alt="partner" />
          </CCol>
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

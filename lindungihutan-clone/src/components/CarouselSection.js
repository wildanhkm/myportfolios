import {
  CCarousel,
  CCarouselItem,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";
import React from "react";
import KadoBumi from "../images/kadobumi.webp";
import AlamRaya from "../images/alamraya.webp";
import CollaboraTree from "../images/Collaboratree.webp";
import SedekahPohon from "../images/sedekahpohon.webp";

const CarouselSection = () => {
  return (
    <section>
      <CContainer className="my-5 py-5">
        <CRow>
          <CCol xs sm md={4}>
            <h3 style={{ color: "black" }}>LindungiHutan</h3>
            <p style={{ color: "black" }}>
              Platform Crowdplanting penggalangan dana online untuk konservasi
              hutan dan lingkungan.
            </p>
          </CCol>
          <CCol xs sm md={8}>
            <CCarousel controls>
              <CCarouselItem>
                <img
                  className="d-block w-50"
                  src={KadoBumi}
                  alt="banner kado bumi"
                />
              </CCarouselItem>
              <CCarouselItem>
                <img
                  className="d-block w-50"
                  src={AlamRaya}
                  alt="banner alam raya"
                />
              </CCarouselItem>
              <CCarouselItem>
                <img
                  className="d-block w-50"
                  src={CollaboraTree}
                  alt="banner collaboratree"
                />
              </CCarouselItem>
              <CCarouselItem>
                <img
                  className="d-block w-50"
                  src={SedekahPohon}
                  alt="banner sedekah pohon"
                />
              </CCarouselItem>
            </CCarousel>
          </CCol>
        </CRow>
      </CContainer>
    </section>
  );
};

export default CarouselSection;

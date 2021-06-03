import "@coreui/coreui/dist/css/coreui.min.css";
import "./App.css";
import GIF from "./images/homegif.webp";

import TopNav from "./components/TopNav";
import Navbar from "./components/Navbar";
import HeroContent from "./components/HeroContent";
import CarouselSection from "./components/CarouselSection";
import CardSection from "./components/CardSection";
import PartnerSection from "./components/PartnerSection";
import FooterSection from "./components/FooterSection";

function App() {
  document.title = "Lindungi Hutan Clone";
  return (
    <>
      <header>
        <TopNav />
        <Navbar />
      </header>
      <main>
        <HeroContent
          heading="Hal sederhana, jadi lebih bermakna bersama LindungiHutan."
          subheading="Buat aksi penanaman dan lingkungan dengan mudah, aman, dan transparan. Mulai Tanam #PohonPertama kamu."
          button="Buat Kampanye Alam"
          link="Pelajari Bagaimana Kami Bekerja"
          image={GIF}
        />
        <CarouselSection />
        <CardSection />
        <PartnerSection />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
}

export default App;

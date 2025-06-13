import React from "react";
import SearchBar from "./SearchBar";
import SectionArch from "./SectionArch";
import "../Styles/HeroSection.css";

function HeroSection() {
  return (
    <>
      <section className="hero-section">
        {/* LEFT SIDE: Two animated image columns */}
        <div className="hero-images">
          <div className="image-column scroll-down">
            <img src="/images/img1.png" alt="img1" />
            <img src="/images/img2.png" alt="img2" />
            <img src="/images/img3.png" alt="img3" />
            <img src="/images/img4.png" alt="img4" />
          </div>
          <div className="image-column scroll-up">
            <img src="/images/img5.png" alt="img5" />
            <img src="/images/img6.png" alt="img6" />
            <img src="/images/img7.png" alt="img7" />
            <img src="/images/img8.png" alt="img8" />
          </div>
        </div>

        {/* RIGHT SIDE: Hero text */}
        <div className="hero-text">
          <h1>
            Book an appointment with <span>lifestyle medicine</span> experts
          </h1>
          <p>Optimize your lifestyle and reverse chronic diseases.</p>
          <SearchBar />
        </div>
      </section>
      <SectionArch />
    </>
  );
}

export default HeroSection;

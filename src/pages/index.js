import React from "react";
import {
  AboutSection,
  HeroSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      
      <Seo title="JONLAB" />
      
      <Page useSplashScreenAnimation>

        <div style={{marginBottom: '-8%', marginTop: '-4%'}}>
          <HeroSection sectionId="hero"/>
        </div>
        
        <div style={{marginBottom: '-8%'}}>
          <AboutSection sectionId="about" heading="Ultimas Plublicações"/>
        </div>
      
      </Page>
    </>
  );
}

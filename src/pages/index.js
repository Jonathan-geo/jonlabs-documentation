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
        <HeroSection sectionId="hero"/>
        <AboutSection sectionId="about" heading="Sobre o projeto"/>
        <ProjectsSection sectionId="projects" heading="Ultimas plublicações"/>
      </Page>
    </>
  );
}

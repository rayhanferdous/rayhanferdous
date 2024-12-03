"use client";
import Container from "@/components/Layout/Container";
import GapContainer from "@/components/Layout/GapContainer";
import Header from "@/components/Layout/Header";
import Experiance from "@/components/Layout/Index/Experiance";
import FeatureProject from "@/components/Layout/Index/FeatureProject";
import Footer from "@/components/Layout/Index/Footer";
import Hero from "@/components/Layout/Index/Hero";
import ProjectShowcase from "@/components/Layout/Index/ProjectShowcase";
import NavMenuCard from "@/components/Layout/NavMenuCard";
import Drawer from "@/components/Utils/Drawer";
import { featureProjectData } from "@/data/FeatureProjectData";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  useEffect(() => {
    // Set isDrawerVisible to true when the page is ready (mounted)
    setIsDrawerVisible(true);
  }, []);

  return (
    <>
      <Header setIsOpen={() => setIsOpen(true)} />
      <Container>
        <Hero />
        <GapContainer>
          <FeatureProject
            title={featureProjectData[0].title}
            description={featureProjectData[0].description}
            image={featureProjectData[0].image}
            technologies={featureProjectData[0].technologies}
            live_preview={featureProjectData[0].live_preview}
          />
          <FeatureProject
            flipCard={true}
            title={featureProjectData[1].title}
            description={featureProjectData[1].description}
            image={featureProjectData[1].image}
            technologies={featureProjectData[1].technologies}
            live_preview={featureProjectData[1].live_preview}
          />
          {/* <ProjectShowcase /> */}
          <Experiance />
          <Footer />
        </GapContainer>
      </Container>
      {/* Render the Drawer only when isDrawerVisible is true */}
      {isDrawerVisible && (
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <NavMenuCard customStyle={""} />
        </Drawer>
      )}
    </>
  );
}

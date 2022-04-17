import React from "react";
import Features from "../../components/Features/Features";
import Services from "../../components/Services/Services";
import TopBanner from "../../components/TopBanner/TopBanner";

const Home = () => {
  return (
    <>
      <section>
        <TopBanner></TopBanner>
      </section>
      <section>
        <Features></Features>
      </section>
      <section>
        <Services></Services>
      </section>
    </>
  );
};

export default Home;

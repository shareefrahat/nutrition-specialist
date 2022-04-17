import React from "react";
import Features from "../../components/Features/Features";
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
      <section>service</section>
    </>
  );
};

export default Home;

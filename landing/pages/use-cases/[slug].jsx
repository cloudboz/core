import {
  Challenge,
  CustomerCaseStudy,
  Footer,
  Navbar,
  ReadyGetStarted,
  Resources,
  Solution,
  UseCaseHero,
  WhiteboardVideo,
} from "components/organisms";
import React from "react";

const UseCasePage = () => {
  return (
    <div>
      <Navbar />
      <UseCaseHero />
      <Challenge />
      <Solution />
      <CustomerCaseStudy />
      <Resources />
      <ReadyGetStarted />
      <WhiteboardVideo />
      <Footer />
    </div>
  );
};

export default UseCasePage;
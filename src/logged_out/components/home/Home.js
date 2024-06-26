import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import MidSection from "./MidSection";
import FeatureSection from "./FeatureSection";
import ProductRoadMapSection from "./ProductRoadMapSection";
import PricingSection from "./PricingSection";


function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeadSection />
      <FeatureSection />
      <ProductRoadMapSection />
      <MidSection />
      <PricingSection />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;

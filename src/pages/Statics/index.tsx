import { lazy } from "react";
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const StaticsBlock = lazy(() => import("../../components/StaticsBlock"));

const Statics = () => {
  return (
    <Container>
      <ScrollToTop />
      <StaticsBlock
        direction="right"
        id="statics"
      />
     
    </Container>
  );
};

export default Statics;

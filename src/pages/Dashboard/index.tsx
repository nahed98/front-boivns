import { lazy } from "react";
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const BovinsBlock = lazy(() => import("../../components/Bovins"));

const Statics = () => {
  return (
    <Container>
      <ScrollToTop />
      <BovinsBlock
      />
     
    </Container>
  );
};

export default Statics;

import FixedHeader from "../components/common/FixedHeader";
import FixedMenu from "../components/common/FixedMenu";
import Carousel from "../components/common/Carousel";
import Cards from "../components/common/Cards";
import { Footer } from "antd/lib/layout/layout";

const LandingPage = () => {
  return (
    <>
      <FixedHeader />
      <FixedMenu />
      <Carousel />
      <Cards />
      <Footer style={
        { textAlign: 'center',
          padding : '50px' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </>
  );
};

export default LandingPage;
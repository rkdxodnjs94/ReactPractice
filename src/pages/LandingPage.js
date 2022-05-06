import FixedHeader from "../components/common/FixedHeader";
import FixedMenu from "../components/common/FixedMenu";
import Carousel from "../components/common/Carousel";
import Cards from "../components/common/Cards";
import { Footer } from "antd/lib/layout/layout";
import './LandingPage.css';
import { useEffect, useState } from "react";

const LandingPage = () => {
  let [fade, setFade] = useState('');

  useEffect(() => {
    setFade('end');

    return () => {
      setFade('')
    }
  })

  return (
    <div className={'start '+fade}>
      <FixedHeader />
      <FixedMenu />
      <Carousel />
      <Cards />
      <Footer style={
        { textAlign: 'center',
          padding : '50px' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </div>
  );
};

export default LandingPage;
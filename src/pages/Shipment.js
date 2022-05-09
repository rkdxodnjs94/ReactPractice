import FixedHeader from "../components/common/FixedHeader";
import FixedMenu from "../components/common/FixedMenu";
import { Footer } from "antd/lib/layout/layout";
import ShipTable from "../components/common/ShipTable";
import './Animation.css';
import { useEffect, useState } from "react";

const Shipment = () => {

  let [fade, setFade] = useState('');

  useEffect(() => {
    setFade('end');

    return () => {
      setFade('')
    }
  })

  return (
    <div className={'start ' + fade}>
      <FixedHeader />
      <FixedMenu />
      <ShipTable />
      <Footer style={
        { textAlign: 'center',
          padding : '5%' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </div>
  );
};

export default Shipment;
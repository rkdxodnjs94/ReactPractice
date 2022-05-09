import FixedHeader from "../components/common/FixedHeader";
import FixedMenu from "../components/common/FixedMenu";
import { Footer } from "antd/lib/layout/layout";
import DashboardList from "../components/common/DashboardList";
import './Animation.css';
import { useEffect, useState } from "react";

const Dashboard = () => {

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
      <DashboardList />
      <Footer style={
        { textAlign: 'center',
          padding : '5%' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </div>
  );
};

export default Dashboard;
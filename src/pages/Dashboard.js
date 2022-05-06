import FixedHeader from "../components/common/FixedHeader";
import FixedMenu from "../components/common/FixedMenu";
import { Footer } from "antd/lib/layout/layout";
import DashboardList from "../components/common/DashboardList";

const Dashboard = () => {
  return (
    <>
      <FixedHeader />
      <FixedMenu />
      <DashboardList />
      <Footer style={
        { textAlign: 'center',
          padding : '5%' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </>
  );
};

export default Dashboard;
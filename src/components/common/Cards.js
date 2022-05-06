import DashboardCard1 from "./DashboardCard1";
import { Row, Col } from 'antd';
import Shipments from "./Shipments";
import ShipRequest from "./ShipRequest";

const Cards = () => {
  return (
    <>
      <Row style={{paddingTop: '2%', paddingRight: '10%', paddingLeft: '10%'}}
       gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter" md={16} xs={8}>
          <DashboardCard1 />
        </Col>
        <Col className="gutter" span={8}>
          <Shipments />
        </Col>
        <Col className="gutter" md={16} xs={8}>
          <ShipRequest />
        </Col>
        <Col className="gutter" span={8}>
          <Shipments />
        </Col>
      </Row>
    </>
  );
}
export default Cards;
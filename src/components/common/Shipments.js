import { Card, Avatar } from 'antd';

const { Meta } = Card;

export default (props) => (
  <Card
    style={{ width: '100%', maxHeight:'100px', cursor: 'pointer' }}
    cover={
      <img
        style={{maxWidth:'100%'}}
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    } 
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Shipment"
      description="This is Shipment Menu"
      style={{cursor: 'pointer'}}
    />
  </Card>
);
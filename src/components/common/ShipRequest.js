import { Card, Avatar } from 'antd';

const { Meta } = Card;

export default () => (
  <Card
    style={{ width: '50vw' }}
    cover={
      <img
        style={{width:'100%', height: '265px',cursor: 'pointer'}}
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }>
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Shipment Request"
      description="This is Shipment Request Menu"
      style={{cursor: 'pointer'}}
    />
  </Card>
);
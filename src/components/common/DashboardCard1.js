import { Card, Avatar } from 'antd';

const { Meta } = Card;

export default () => (
  <Card
    style={{ width: '50vw', cursor: 'pointer' }}
    cover={
      <img
        style={{width:'100%', height: '265px'}}
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }>
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Dash Board"
      description="This is Dash Board Menu"
      style = {{cursor: 'pointer'}}
    />
  </Card>
);
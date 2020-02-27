import { Card } from 'antd';
import React from 'react';
const { Meta } = Card;


function Pcard()
{return (
  <div>
   <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="podcasting card"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      title="Card title"
      description="This is the description"
    />
  </Card>
  </div>
)
}
export default Pcard;
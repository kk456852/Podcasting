import React from 'react';
import Pcard from '../componets/podcast_card';
import { Row, Col } from 'antd';
function Podcasting()
{ 
  return(
    <div>
    <Row type="flex" justify="space-around">
      <Col span={4}><Pcard/></Col>
      <Col span={4}><Pcard/></Col>
      <Col span={4}><Pcard/></Col>
      <Col span={4}><Pcard/></Col>
    </Row>
    <Row type="flex" justify="space-around">
      <Col span={4}><Pcard/></Col>
      <Col span={4}><Pcard/></Col>
      <Col span={4}><Pcard/></Col>
      <Col span={4}><Pcard/></Col>
    </Row>
    <Row type="flex" justify="space-around">
      <Col span={4}><Pcard/></Col>
      <Col span={4}><Pcard/></Col>
      <Col span={4}><Pcard/></Col>
      <Col span={4}><Pcard/></Col>
    </Row>
  </div>
  )
}

export default Podcasting;
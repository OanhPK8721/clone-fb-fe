import React from 'react';
import Header from '../../../components/Header/header';
import { Col, Row } from 'antd';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Row>
       <Col span={6}> <div className="right ">a</div> </Col>
       <Col span={12}><div className = "center"> b</div></Col>
       <Col span={6}><div className="left">c</div></Col>
      </Row>
    </div>
  );
};

export default Home;
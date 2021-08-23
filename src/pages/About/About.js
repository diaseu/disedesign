import React from 'react';
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer, Sider } = Layout;


const About = props => {

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>DIA SEU</Breadcrumb.Item>
        <Breadcrumb.Item>{props.page}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <h1 className="line">Diana Seung</h1>

        <h2 className="text">Full-stack developer with an emphasis on front-end.<br />I believe in good design, hot coffee and the deity of cats. </h2>
        <p>I believe good design lies in the intersection of function and form -- good design underlines good user experience, good user experience underlines purpose. My goal is to create products that are useful, easy to use and pleasant to look at. I enjoy using my skill-set to empower people to accomplish their goals.

          My development stack is focused on design meets usability meets performance. My current technology of choice includes Node.js, React and Mongodb.
        </p>
      </div>
    </>
  )
}

export default About
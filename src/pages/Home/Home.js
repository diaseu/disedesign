import React from 'react';
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;


const Home = props => {

  return (
    <>
      <Content className="home">
        {/* <h1 className="line">Diana Seung</h1> */}
        <span className="home-helper"></span>
        <Link to='/about'>
          <img src="https://i.imgur.com/rB5TRvL.png" alt="" className="home-logo" />
        </Link>
      </Content>
    </>
  )
}

export default Home
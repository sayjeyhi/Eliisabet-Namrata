import { Link, Outlet } from "react-router-dom";
import {Layout, Menu, Space} from 'antd';
import React from 'react';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
      >
        <Menu.Item key="home"><Link to="/" data-testid="home-link">Home</Link></Menu.Item>

        <Menu.SubMenu key="tickets" title="Tickets">
          <Menu.Item><Link to="/tickets/">Tickets List</Link></Menu.Item>
          <Menu.Item><Link to="/tickets/add">Add Ticket</Link></Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="users" title="Users">
          <Menu.Item><Link to="/users/">Users List</Link></Menu.Item>
          <Menu.Item><Link to="/users/add">Add User</Link></Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Header>
    <Content style={{ padding: '20px 50px' }}>
      <Space />
      <div className="site-layout-content">
        <Outlet />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Jafar Rezaei © 2022 - <a data-testid="yocale-link" href="https://www.yocale.com/">Yocale</a></Footer>
  </Layout>
);

export default App;

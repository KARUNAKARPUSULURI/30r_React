import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    SearchOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Tabs, Card, Table } from 'antd';
import Cards from './Card';
import Table1 from "./Table.jsx";
import LoginForm from './Form.jsx';

const { Header, Sider, Content } = Layout;

const LayOut = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const tabItems = [
        {
            key: "1",
            label: "Cards",
            children: <Cards />
        },
        {
            key: "2",
            label: "Table",
            children: <Table1 />
        },
        {
            key: "3",
            label: "Form",
            children: <LoginForm />
        }
    ]
    return (
        <Layout>
            <Sider collapsible collapsed = {!collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Profile',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Gallery',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'Upload Songs',
                        },
                        {
                            key: "4",
                            icon: <SearchOutlined />,
                            label: "Search section"
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    Content
                    <h1>This is Content Area</h1>
                    <Tabs defaultActiveKey="2" items={tabItems}></Tabs>
                </Content>
            </Layout>
        </Layout>
    );
};
export default LayOut;
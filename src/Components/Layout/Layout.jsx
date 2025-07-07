import React, { useState, useEffect } from "react";
import { Layout, Menu, Dropdown, Avatar, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, LogoutOutlined, DashboardOutlined, TeamOutlined, BookOutlined, ApartmentOutlined } from "@ant-design/icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "antd/dist/reset.css";

const { Header, Sider, Content } = Layout;

const items = [
    { key: "dashboard", icon: <DashboardOutlined />, label: <Link to="/">Dashboard</Link> },
    { key: "students", icon: <TeamOutlined />, label: <Link to="/students">Students</Link> },
    { key: "staff", icon: <UserOutlined />, label: <Link to="/staff">Staff</Link> },
    { key: "subjects", icon: <BookOutlined />, label: <Link to="/subjects">Subjects</Link> },
    { key: "class", icon: <ApartmentOutlined />, label: <Link to="/class">Class</Link> }
];

const AppLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [userName, setUserName] = useState("User"); // Default user name

    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.name) {
            setUserName(user.name);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    const profileMenu = (
        <Menu>
            <Menu.Item key="logout" onClick={handleLogout} icon={<LogoutOutlined />}>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/* Sidebar */}
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: "#001529" }}>
                <div className="logo" style={{ color: "white", textAlign: "center", padding: "20px", fontSize: "20px" }}>
                    {collapsed ? "ED" : "EduDashboard"}
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["dashboard"]} items={items} />
            </Sider>

            {/* Main Layout */}
            <Layout>
                {/* Header */}
                <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px", background: "#fff" }}>
                    {/* Toggle Sidebar Button */}
                    <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={() => setCollapsed(!collapsed)} />
                    
                    {/* Profile Section */}
                    <Dropdown overlay={profileMenu} trigger={["click"]}>
                        <div style={{ display: "flex", alignItems: "center", cursor: "pointer", gap: "10px" }}>
                            <Avatar icon={<UserOutlined />} />
                            <span style={{ fontWeight: "500" }}>{userName}</span>
                        </div>
                    </Dropdown>
                </Header>

                {/* Page Content */}
                <Content style={{ margin: "20px", padding: "20px", background: "#fff" }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
